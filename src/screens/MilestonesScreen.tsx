import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { COLORS, STAGE_MILESTONES } from "../lib/constants";
import { getProfile, getMilestones, toggleMilestone } from "../lib/database";
import { getStageLabel } from "../lib/stage";

const STAGE_ORDER = [
  "POSTPARTUM",
  "INFANT_3_6",
  "INFANT_6_12",
  "TODDLER_1_2",
  "TODDLER_2_3",
];

export default function MilestonesScreen() {
  const insets = useSafeAreaInsets();
  const [stage, setStage] = useState("TTC");
  const [completed, setCompleted] = useState<Record<string, string | null>>({});

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const p = await getProfile();
        if (p?.stage) setStage(p.stage);
        setCompleted(await getMilestones());
      })();
    }, [])
  );

  const idx = STAGE_ORDER.indexOf(stage);
  const relevantStages = idx >= 0 ? STAGE_ORDER.slice(0, idx + 1) : [];

  async function toggle(key: string, label: string) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const result = await toggleMilestone(key, label);
    setCompleted((prev) => ({ ...prev, [key]: result }));
    if (result) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  }

  return (
    <ScrollView
      style={s.container}
      contentContainerStyle={[
        s.content,
        { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 100 },
      ]}
    >
      <Text style={s.title}>Milestone Tracker</Text>
      <Text style={s.subtitle}>Track your little one's achievements</Text>

      {relevantStages.length === 0 ? (
        <View style={s.empty}>
          <Text style={s.emptyEmoji}>🌟</Text>
          <Text style={s.emptyText}>
            Milestones will appear once your baby arrives!
          </Text>
          <Text style={s.emptyHint}>
            Current stage: {getStageLabel(stage)}
          </Text>
        </View>
      ) : (
        relevantStages.map((st) => {
          const milestones = STAGE_MILESTONES[st] || [];
          const completedCount = milestones.filter(
            (m) => !!completed[m.key]
          ).length;

          return (
            <View key={st} style={s.card}>
              <View style={s.cardHeader}>
                <Text style={s.cardTitle}>{getStageLabel(st)}</Text>
                <Text style={s.cardCount}>
                  {completedCount}/{milestones.length}
                </Text>
              </View>
              {milestones.map((m) => {
                const done = !!completed[m.key];
                return (
                  <TouchableOpacity
                    key={m.key}
                    style={s.row}
                    onPress={() => toggle(m.key, m.label)}
                    activeOpacity={0.7}
                  >
                    <View style={[s.check, done && s.checkDone]}>
                      {done && <Text style={s.checkMark}>✓</Text>}
                    </View>
                    <Text
                      style={[s.milestoneLabel, done && s.milestoneDone]}
                    >
                      {m.label}
                    </Text>
                    {done && completed[m.key] && (
                      <Text style={s.date}>{completed[m.key]}</Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: "700", color: COLORS.gray800 },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray500,
    marginTop: 4,
    marginBottom: 20,
  },
  empty: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.gray200,
  },
  emptyEmoji: { fontSize: 32, marginBottom: 8 },
  emptyText: { color: COLORS.gray500, fontSize: 15, textAlign: "center" },
  emptyHint: {
    color: COLORS.gray400,
    fontSize: 13,
    marginTop: 8,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.gray800,
  },
  cardCount: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.teal,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  check: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: COLORS.gray300,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checkDone: { backgroundColor: COLORS.teal, borderColor: COLORS.teal },
  checkMark: { color: COLORS.white, fontSize: 13, fontWeight: "700" },
  milestoneLabel: { flex: 1, fontSize: 15, color: COLORS.gray700 },
  milestoneDone: { color: COLORS.gray400 },
  date: { fontSize: 12, color: COLORS.gray400 },
});
