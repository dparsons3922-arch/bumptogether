import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../lib/constants";
import { updateProfile } from "../lib/database";
import { calculateStage } from "../lib/stage";

type Props = { onComplete: () => void };

export default function OnboardingScreen({ onComplete }: Props) {
  const [step, setStep] = useState(1);
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [journey, setJourney] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [carrying, setCarrying] = useState("");
  const [childName, setChildName] = useState("");

  async function finish() {
    const stage = calculateStage(
      journey === "pregnant" ? dueDate : null,
      journey === "born" ? birthDate : null
    );
    await updateProfile({
      partner1Name: p1, partner2Name: p2, carryingPartner: carrying,
      dueDate: journey === "pregnant" ? dueDate : null,
      birthDate: journey === "born" ? birthDate : null,
      childName: childName || null, stage, onboarded: 1,
    });
    onComplete();
  }

  const btn = (label: string, onPress: () => void, disabled = false) => (
    <TouchableOpacity
      style={[s.btn, disabled && { opacity: 0.4 }]}
      onPress={onPress} disabled={disabled}
    >
      <Text style={s.btnText}>{label}</Text>
    </TouchableOpacity>
  );

  const opt = (value: string, label: string, desc: string, selected: string, onSelect: (v: string) => void) => (
    <TouchableOpacity
      key={value}
      style={[s.option, selected === value && s.optionSelected]}
      onPress={() => onSelect(value)}
    >
      <Text style={s.optLabel}>{label}</Text>
      <Text style={s.optDesc}>{desc}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>BumpTogether</Text>
      <Text style={s.subtitle}>Let's personalize your experience</Text>
      <View style={s.dots}>
        {[1, 2, 3, 4].map((i) => (
          <View key={i} style={[s.dot, i <= step && s.dotActive]} />
        ))}
      </View>

      <View style={s.card}>
        {step === 1 && (
          <>
            <Text style={s.heading}>Who's on this journey?</Text>
            <Text style={s.label}>Partner 1 name</Text>
            <TextInput style={s.input} value={p1} onChangeText={setP1} placeholder="First name" placeholderTextColor={COLORS.gray400} />
            <Text style={s.label}>Partner 2 name</Text>
            <TextInput style={s.input} value={p2} onChangeText={setP2} placeholder="First name" placeholderTextColor={COLORS.gray400} />
            {btn("Next", () => setStep(2), !p1 || !p2)}
          </>
        )}
        {step === 2 && (
          <>
            <Text style={s.heading}>Where are you in your journey?</Text>
            {opt("ttc", "Trying to conceive", "Hoping to start or grow our family", journey, setJourney)}
            {opt("pregnant", "Currently pregnant", "Baby is on the way!", journey, setJourney)}
            {opt("born", "Baby is here!", "Our little one has arrived", journey, setJourney)}
            {journey === "pregnant" && (
              <>
                <Text style={s.label}>Due date (YYYY-MM-DD)</Text>
                <TextInput style={s.input} value={dueDate} onChangeText={setDueDate} placeholder="2026-09-15" placeholderTextColor={COLORS.gray400} />
              </>
            )}
            {journey === "born" && (
              <>
                <Text style={s.label}>Birth date (YYYY-MM-DD)</Text>
                <TextInput style={s.input} value={birthDate} onChangeText={setBirthDate} placeholder="2026-01-15" placeholderTextColor={COLORS.gray400} />
              </>
            )}
            <View style={s.row}>
              <TouchableOpacity style={s.btnBack} onPress={() => setStep(1)}>
                <Text style={s.btnBackText}>Back</Text>
              </TouchableOpacity>
              {btn("Next", () => setStep(3), !journey || (journey === "pregnant" && !dueDate) || (journey === "born" && !birthDate))}
            </View>
          </>
        )}
        {step === 3 && (
          <>
            <Text style={s.heading}>Who is/was the carrying partner?</Text>
            {opt("partner1", p1, "", carrying, setCarrying)}
            {opt("partner2", p2, "", carrying, setCarrying)}
            <View style={s.row}>
              <TouchableOpacity style={s.btnBack} onPress={() => setStep(2)}>
                <Text style={s.btnBackText}>Back</Text>
              </TouchableOpacity>
              {btn("Next", () => setStep(4), !carrying)}
            </View>
          </>
        )}
        {step === 4 && (
          <>
            <Text style={s.heading}>{journey === "born" ? "Baby's name?" : "Almost done!"}</Text>
            {journey === "born" && (
              <>
                <Text style={s.label}>Baby's name (optional)</Text>
                <TextInput style={s.input} value={childName} onChangeText={setChildName} placeholder="Baby's name" placeholderTextColor={COLORS.gray400} />
              </>
            )}
            <Text style={s.desc}>You're all set! You can always update these in Settings.</Text>
            <View style={s.row}>
              <TouchableOpacity style={s.btnBack} onPress={() => setStep(3)}>
                <Text style={s.btnBackText}>Back</Text>
              </TouchableOpacity>
              {btn("Let's Go!", finish)}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  content: { padding: 24, paddingTop: 80 },
  title: { fontSize: 28, fontWeight: "700", color: COLORS.teal, textAlign: "center" },
  subtitle: { fontSize: 15, color: COLORS.gray500, textAlign: "center", marginTop: 4 },
  dots: { flexDirection: "row", justifyContent: "center", gap: 8, marginTop: 16, marginBottom: 24 },
  dot: { width: 40, height: 6, borderRadius: 3, backgroundColor: COLORS.gray200 },
  dotActive: { backgroundColor: COLORS.teal },
  card: { backgroundColor: COLORS.white, borderRadius: 20, padding: 24, borderWidth: 1, borderColor: "#fde8e8" },
  heading: { fontSize: 20, fontWeight: "600", color: COLORS.gray800, marginBottom: 16 },
  label: { fontSize: 13, fontWeight: "500", color: COLORS.gray700, marginBottom: 4, marginTop: 12 },
  input: { backgroundColor: COLORS.gray50, borderRadius: 12, padding: 14, fontSize: 16, borderWidth: 1, borderColor: COLORS.gray200, color: COLORS.gray800 },
  btn: { backgroundColor: COLORS.teal, borderRadius: 12, padding: 14, alignItems: "center", marginTop: 16, flex: 1 },
  btnText: { color: COLORS.white, fontWeight: "600", fontSize: 16 },
  btnBack: { backgroundColor: COLORS.gray100, borderRadius: 12, padding: 14, alignItems: "center", marginTop: 16, flex: 1, marginRight: 12 },
  btnBackText: { color: COLORS.gray700, fontWeight: "600", fontSize: 16 },
  row: { flexDirection: "row" },
  option: { padding: 16, borderRadius: 12, borderWidth: 2, borderColor: COLORS.gray200, marginBottom: 10 },
  optionSelected: { borderColor: COLORS.teal, backgroundColor: COLORS.tealLight },
  optLabel: { fontWeight: "600", color: COLORS.gray800, fontSize: 16 },
  optDesc: { color: COLORS.gray500, fontSize: 13, marginTop: 2 },
  desc: { color: COLORS.gray600, fontSize: 14, marginTop: 8 },
});
