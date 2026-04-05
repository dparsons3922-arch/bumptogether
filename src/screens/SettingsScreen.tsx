import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../lib/constants";
import { getProfile, updateProfile, deleteAllData } from "../lib/database";
import { calculateStage } from "../lib/stage";

type Props = { onReset: () => void };

export default function SettingsScreen({ onReset }: Props) {
  const nav = useNavigation<any>();
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [carrying, setCarrying] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [childName, setChildName] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      const p = await getProfile();
      if (p) {
        setP1(p.partner1Name || "");
        setP2(p.partner2Name || "");
        setCarrying(p.carryingPartner || "");
        setDueDate(p.dueDate || "");
        setBirthDate(p.birthDate || "");
        setChildName(p.childName || "");
      }
    })();
  }, []);

  async function save() {
    const stage = calculateStage(dueDate || null, birthDate || null);
    await updateProfile({
      partner1Name: p1, partner2Name: p2, carryingPartner: carrying,
      dueDate: dueDate || null, birthDate: birthDate || null,
      childName: childName || null, stage,
    });
    setMsg("Saved!");
    setTimeout(() => setMsg(""), 2000);
  }

  function confirmDelete() {
    Alert.alert("Delete All Data", "This will erase everything and cannot be undone.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete", style: "destructive", onPress: async () => {
          await deleteAllData();
          onReset();
        },
      },
    ]);
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <TouchableOpacity onPress={() => nav.goBack()} style={s.back}>
        <Text style={s.backText}>← Back</Text>
      </TouchableOpacity>
      <Text style={s.title}>Settings</Text>

      <View style={s.card}>
        <Text style={s.label}>Partner 1 name</Text>
        <TextInput style={s.input} value={p1} onChangeText={setP1} placeholderTextColor={COLORS.gray400} />
        <Text style={s.label}>Partner 2 name</Text>
        <TextInput style={s.input} value={p2} onChangeText={setP2} placeholderTextColor={COLORS.gray400} />

        <Text style={s.label}>Carrying partner</Text>
        <View style={s.row}>
          <TouchableOpacity style={[s.opt, carrying === "partner1" && s.optSel]} onPress={() => setCarrying("partner1")}>
            <Text style={[s.optText, carrying === "partner1" && s.optTextSel]}>{p1 || "Partner 1"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.opt, carrying === "partner2" && s.optSel]} onPress={() => setCarrying("partner2")}>
            <Text style={[s.optText, carrying === "partner2" && s.optTextSel]}>{p2 || "Partner 2"}</Text>
          </TouchableOpacity>
        </View>

        <Text style={s.label}>Due date (YYYY-MM-DD)</Text>
        <TextInput style={s.input} value={dueDate} onChangeText={setDueDate} placeholder="2026-09-15" placeholderTextColor={COLORS.gray400} />
        <Text style={s.label}>Birth date (YYYY-MM-DD)</Text>
        <TextInput style={s.input} value={birthDate} onChangeText={setBirthDate} placeholder="2026-01-15" placeholderTextColor={COLORS.gray400} />
        <Text style={s.label}>Baby's name</Text>
        <TextInput style={s.input} value={childName} onChangeText={setChildName} placeholder="Optional" placeholderTextColor={COLORS.gray400} />

        {msg ? <Text style={s.msg}>{msg}</Text> : null}

        <TouchableOpacity style={s.btn} onPress={save}>
          <Text style={s.btnText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

      <View style={s.danger}>
        <Text style={s.dangerTitle}>Danger Zone</Text>
        <Text style={s.dangerDesc}>Permanently delete all your data.</Text>
        <TouchableOpacity style={s.dangerBtn} onPress={confirmDelete}>
          <Text style={s.dangerBtnText}>Delete All Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  content: { padding: 20, paddingTop: 70, paddingBottom: 100 },
  back: { marginBottom: 12 },
  backText: { color: COLORS.teal, fontSize: 15, fontWeight: "500" },
  title: { fontSize: 24, fontWeight: "700", color: COLORS.gray800, marginBottom: 20 },
  card: { backgroundColor: COLORS.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: "#fde8e8", marginBottom: 20 },
  label: { fontSize: 13, fontWeight: "500", color: COLORS.gray700, marginTop: 14, marginBottom: 4 },
  input: { backgroundColor: COLORS.gray50, borderRadius: 12, padding: 14, fontSize: 16, borderWidth: 1, borderColor: COLORS.gray200, color: COLORS.gray800 },
  row: { flexDirection: "row", gap: 10, marginTop: 4 },
  opt: { flex: 1, padding: 12, borderRadius: 12, borderWidth: 2, borderColor: COLORS.gray200, alignItems: "center" },
  optSel: { borderColor: COLORS.teal, backgroundColor: COLORS.tealLight },
  optText: { fontWeight: "600", color: COLORS.gray700 },
  optTextSel: { color: COLORS.tealDark },
  msg: { color: COLORS.teal, fontWeight: "600", marginTop: 12 },
  btn: { backgroundColor: COLORS.teal, borderRadius: 12, padding: 14, alignItems: "center", marginTop: 16 },
  btnText: { color: COLORS.white, fontWeight: "600", fontSize: 16 },
  danger: { backgroundColor: COLORS.white, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: "#fecaca" },
  dangerTitle: { fontSize: 17, fontWeight: "600", color: "#dc2626", marginBottom: 4 },
  dangerDesc: { fontSize: 13, color: COLORS.gray500, marginBottom: 12 },
  dangerBtn: { backgroundColor: "#fef2f2", borderRadius: 12, padding: 12, alignItems: "center" },
  dangerBtnText: { color: "#dc2626", fontWeight: "600" },
});
