import { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { COLORS, DAILY_TIDBITS, STAGE_MILESTONES } from "../lib/constants";
import { getProfile, getReadArticleIds, getMilestones } from "../lib/database";
import { getStageLabel } from "../lib/stage";
import { getArticlesByStage } from "../lib/articles";
import type { Article } from "../lib/articles";

function getDailyTidbit(stage: string): string {
  const tidbits = DAILY_TIDBITS[stage] ?? DAILY_TIDBITS["TTC"];
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return tidbits[dayOfYear % tidbits.length];
}

export default function SummaryScreen() {
  const navigation = useNavigation<any>();
  const [stage, setStage] = useState("TTC");
  const [milestoneStatus, setMilestoneStatus] = useState<Record<string, string | null>>({});
  const [recommendedArticles, setRecommendedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      (async () => {
        const profile = await getProfile();
        if (!active || !profile) return;

        const currentStage = profile.stage ?? "TTC";
        setStage(currentStage);

        const [milestones, readIds] = await Promise.all([
          getMilestones(),
          getReadArticleIds(),
        ]);

        if (!active) return;
        setMilestoneStatus(milestones);

        const stageArticles = getArticlesByStage(currentStage);
        const unread = stageArticles.filter((a) => !readIds.has(a.id));
        setRecommendedArticles(unread.slice(0, 3));

        setLoading(false);
      })();
      return () => {
        active = false;
      };
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const stageMilestones = (STAGE_MILESTONES[stage] ?? []).slice(0, 4);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <Text style={styles.heading}>This Week's Summary</Text>

      {/* Stage label */}
      <View style={styles.stageBadge}>
        <Text style={styles.stageBadgeText}>{getStageLabel(stage)}</Text>
      </View>

      {/* Today's tidbit */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>TODAY'S TIDBIT</Text>
        <Text style={styles.cardBody}>{getDailyTidbit(stage)}</Text>
      </View>

      {/* Milestone progress */}
      {stageMilestones.length > 0 && (
        <View style={styles.card}>
          <Text style={styles.cardLabel}>MILESTONE PROGRESS</Text>
          {stageMilestones.map((m) => {
            const completed = !!milestoneStatus[m.key];
            return (
              <View key={m.key} style={styles.milestoneRow}>
                <Text style={styles.milestoneCheck}>
                  {completed ? "✅" : "⬜"}
                </Text>
                <Text
                  style={[
                    styles.milestoneText,
                    completed && styles.milestoneCompleted,
                  ]}
                >
                  {m.label}
                </Text>
              </View>
            );
          })}
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => navigation.navigate("Milestones")}
            activeOpacity={0.7}
          >
            <Text style={styles.linkButtonText}>View all milestones →</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Recommended reads */}
      {recommendedArticles.length > 0 && (
        <View style={styles.card}>
          <Text style={styles.cardLabel}>RECOMMENDED READS</Text>
          {recommendedArticles.map((article) => (
            <TouchableOpacity
              key={article.id}
              style={styles.articleRow}
              onPress={() => navigation.navigate("Article", { articleId: article.id })}
              activeOpacity={0.7}
            >
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {recommendedArticles.length === 0 && (
        <View style={styles.card}>
          <Text style={styles.cardLabel}>RECOMMENDED READS</Text>
          <Text style={styles.emptyText}>
            You're all caught up! Check back as new content is added.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.cream,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 15,
    color: COLORS.gray500,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.gray800,
    marginBottom: 8,
  },
  stageBadge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.tealLight,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 20,
  },
  stageBadgeText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.tealDark,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#fde8e8",
    padding: 18,
    marginBottom: 16,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.teal,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },
  cardBody: {
    fontSize: 15,
    color: COLORS.gray700,
    lineHeight: 22,
  },
  milestoneRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray100,
  },
  milestoneCheck: {
    fontSize: 18,
    marginRight: 10,
  },
  milestoneText: {
    fontSize: 15,
    color: COLORS.gray700,
    flex: 1,
  },
  milestoneCompleted: {
    color: COLORS.gray400,
    textDecorationLine: "line-through",
  },
  linkButton: {
    marginTop: 14,
    alignSelf: "flex-start",
  },
  linkButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.teal,
  },
  articleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray100,
  },
  articleTitle: {
    fontSize: 15,
    color: COLORS.gray800,
    flex: 1,
    fontWeight: "500",
  },
  articleArrow: {
    fontSize: 22,
    color: COLORS.teal,
    fontWeight: "700",
    marginLeft: 8,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.gray500,
    fontStyle: "italic",
  },
});
