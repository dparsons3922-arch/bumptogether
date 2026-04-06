import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { COLORS } from "../lib/constants";
import { getProfile, updateProfile, deleteAllData } from "../lib/database";
import { calculateStage } from "../lib/stage";
import DatePickerField from "../components/DatePickerField";

type Props = { onReset: () => void };

export default function SettingsScreen({ onReset }: Props) {
  const nav = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [carrying, setCarrying] = useState("");
  const [dueDate, setDueDate] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<string | null>(null);
  const [childName, setChildName] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      const p = await getProfile();
      if (p) {
        setP1(p.partner1Name || "");
        setP2(p.partner2Name || "");
        setCarrying(p.carryingPartner || "");
        setDueDate(p.dueDate || null);
        setBirthDate(p.birthDate || null);
        setChildName(p.childName || "");
      }
    })();
  }, []);

  const today = new Date();
  const threeYearsAgo = new Date(today);
  threeYearsAgo.setFullYear(today.getFullYear() - 3);
  // Due date: allow up to 2 months past (overdue) to 10 months ahead
  const twoMonthsAgo = new Date(today);
  twoMonthsAgo.setMonth(today.getMonth() - 2);
  const tenMonthsAhead = new Date(today);
  tenMonthsAhead.setMonth(today.getMonth() + 10);

  async function save() {
    const stage = calculateStage(dueDate, birthDate);
    await updateProfile({
      partner1Name: p1.trim(),
      partner2Name: p2.trim(),
      carryingPartner: carrying,
      dueDate: dueDate || null,
      birthDate: birthDate || null,
      childName: childName.trim() || null,
      stage,
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setMsg("Saved!");
    setTimeout(() => setMsg(""), 2000);
  }

  function confirmDelete() {
    Alert.alert(
      "Delete All Data",
      "This will erase everything and cannot be undone. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Warning
            );
            await deleteAllData();
            onReset();
          },
        },
      ]
    );
  }

  return (
    <KeyboardAvoidingView
      style={s.flex}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={s.container}
        contentContainerStyle={[
          s.content,
          {
            paddingTop: insets.top + 16,
            paddingBottom: insets.bottom + 100,
          },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          onPress={() => nav.goBack()}
          style={s.back}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Text style={s.backText}>{"‹"} Back</Text>
        </TouchableOpacity>
        <Text style={s.title}>Settings</Text>

        <View style={s.card}>
          <Text style={s.label}>Partner 1 name</Text>
          <TextInput
            style={s.input}
            value={p1}
            onChangeText={setP1}
            placeholderTextColor={COLORS.gray400}
            autoCapitalize="words"
          />
          <Text style={s.label}>Partner 2 name</Text>
          <TextInput
            style={s.input}
            value={p2}
            onChangeText={setP2}
            placeholderTextColor={COLORS.gray400}
            autoCapitalize="words"
          />

          <Text style={s.label}>Carrying partner</Text>
          <View style={s.row}>
            <TouchableOpacity
              style={[s.opt, carrying === "partner1" && s.optSel]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                setCarrying("partner1");
              }}
              activeOpacity={0.7}
            >
              <Text
                style={[s.optText, carrying === "partner1" && s.optTextSel]}
              >
                {p1 || "Partner 1"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[s.opt, carrying === "partner2" && s.optSel]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                setCarrying("partner2");
              }}
              activeOpacity={0.7}
            >
              <Text
                style={[s.optText, carrying === "partner2" && s.optTextSel]}
              >
                {p2 || "Partner 2"}
              </Text>
            </TouchableOpacity>
          </View>

          <DatePickerField
            label="Due date"
            value={dueDate}
            onChange={setDueDate}
            onClear={() => setDueDate(null)}
            minimumDate={twoMonthsAgo}
            maximumDate={tenMonthsAhead}
          />

          <DatePickerField
            label="Birth date"
            value={birthDate}
            onChange={setBirthDate}
            onClear={() => setBirthDate(null)}
            minimumDate={threeYearsAgo}
            maximumDate={today}
          />

          <Text style={s.label}>Baby's name</Text>
          <TextInput
            style={s.input}
            value={childName}
            onChangeText={setChildName}
            placeholder="Optional"
            placeholderTextColor={COLORS.gray400}
            autoCapitalize="words"
          />

          {msg ? <Text style={s.msg}>{msg}</Text> : null}

          <TouchableOpacity style={s.btn} onPress={save} activeOpacity={0.7}>
            <Text style={s.btnText}>Save Changes</Text>
          </TouchableOpacity>
        </View>

        <View style={s.danger}>
          <Text style={s.dangerTitle}>Danger Zone</Text>
          <Text style={s.dangerDesc}>
            Permanently delete all your data and start over.
          </Text>
          <TouchableOpacity
            style={s.dangerBtn}
            onPress={confirmDelete}
            activeOpacity={0.7}
          >
            <Text style={s.dangerBtnText}>Delete All Data</Text>
          </TouchableOpacity>
        </View>

        <Text style={s.version}>BumpTogether v1.0.0</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: COLORS.cream },
  container: { flex: 1, backgroundColor: COLORS.cream },
  content: { padding: 20 },
  back: { marginBottom: 12 },
  backText: { color: COLORS.teal, fontSize: 17, fontWeight: "600" },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.gray800,
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: COLORS.gray700,
    marginTop: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: COLORS.gray50,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    color: COLORS.gray800,
  },
  row: { flexDirection: "row", gap: 10, marginTop: 4 },
  opt: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.gray200,
    alignItems: "center",
  },
  optSel: { borderColor: COLORS.teal, backgroundColor: COLORS.tealLight },
  optText: { fontWeight: "600", color: COLORS.gray700 },
  optTextSel: { color: COLORS.tealDark },
  msg: { color: COLORS.teal, fontWeight: "600", marginTop: 12 },
  btn: {
    backgroundColor: COLORS.teal,
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginTop: 16,
  },
  btnText: { color: COLORS.white, fontWeight: "600", fontSize: 16 },
  danger: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#fecaca",
    marginBottom: 20,
  },
  dangerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#dc2626",
    marginBottom: 4,
  },
  dangerDesc: { fontSize: 13, color: COLORS.gray500, marginBottom: 12 },
  dangerBtn: {
    backgroundColor: "#fef2f2",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  dangerBtnText: { color: "#dc2626", fontWeight: "600" },
  version: {
    textAlign: "center",
    color: COLORS.gray400,
    fontSize: 12,
    marginTop: 8,
  },
});
