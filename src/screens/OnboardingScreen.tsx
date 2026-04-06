import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { COLORS } from "../lib/constants";
import { updateProfile } from "../lib/database";
import { calculateStage } from "../lib/stage";
import DatePickerField from "../components/DatePickerField";

type Props = { onComplete: () => void };

export default function OnboardingScreen({ onComplete }: Props) {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState(1);
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [journey, setJourney] = useState("");
  const [dueDate, setDueDate] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<string | null>(null);
  const [carrying, setCarrying] = useState("");
  const [childName, setChildName] = useState("");

  async function finish() {
    const stage = calculateStage(
      journey === "pregnant" ? dueDate : null,
      journey === "born" ? birthDate : null
    );
    await updateProfile({
      partner1Name: p1.trim(),
      partner2Name: p2.trim(),
      carryingPartner: carrying,
      dueDate: journey === "pregnant" ? dueDate : null,
      birthDate: journey === "born" ? birthDate : null,
      childName: childName.trim() || null,
      stage,
      onboarded: 1,
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onComplete();
  }

  function goNext(nextStep: number) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setStep(nextStep);
  }

  const btn = (label: string, onPress: () => void, disabled = false) => (
    <TouchableOpacity
      style={[s.btn, disabled && { opacity: 0.4 }]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={s.btnText}>{label}</Text>
    </TouchableOpacity>
  );

  const opt = (
    value: string,
    label: string,
    desc: string,
    selected: string,
    onSelect: (v: string) => void
  ) => (
    <TouchableOpacity
      key={value}
      style={[s.option, selected === value && s.optionSelected]}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onSelect(value);
      }}
      activeOpacity={0.7}
    >
      <Text style={s.optLabel}>{label}</Text>
      {desc ? <Text style={s.optDesc}>{desc}</Text> : null}
    </TouchableOpacity>
  );

  // Minimum date for birth: 3 years ago. Max: today
  const today = new Date();
  const threeYearsAgo = new Date(today);
  threeYearsAgo.setFullYear(today.getFullYear() - 3);

  // Due date: today to ~10 months from now
  const tenMonthsAhead = new Date(today);
  tenMonthsAhead.setMonth(today.getMonth() + 10);

  return (
    <KeyboardAvoidingView
      style={s.flex}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={s.container}
        contentContainerStyle={[
          s.content,
          { paddingTop: insets.top + 40, paddingBottom: insets.bottom + 40 },
        ]}
        keyboardShouldPersistTaps="handled"
      >
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
              <TextInput
                style={s.input}
                value={p1}
                onChangeText={setP1}
                placeholder="First name"
                placeholderTextColor={COLORS.gray400}
                autoCapitalize="words"
                returnKeyType="next"
              />
              <Text style={s.label}>Partner 2 name</Text>
              <TextInput
                style={s.input}
                value={p2}
                onChangeText={setP2}
                placeholder="First name"
                placeholderTextColor={COLORS.gray400}
                autoCapitalize="words"
                returnKeyType="done"
              />
              {btn("Next", () => goNext(2), !p1.trim() || !p2.trim())}
            </>
          )}
          {step === 2 && (
            <>
              <Text style={s.heading}>Where are you in your journey?</Text>
              {opt(
                "ttc",
                "Trying to conceive",
                "Hoping to start or grow our family",
                journey,
                setJourney
              )}
              {opt(
                "pregnant",
                "Currently pregnant",
                "Baby is on the way!",
                journey,
                setJourney
              )}
              {opt(
                "born",
                "Baby is here!",
                "Our little one has arrived",
                journey,
                setJourney
              )}
              {journey === "pregnant" && (
                <DatePickerField
                  label="Due date"
                  value={dueDate}
                  onChange={setDueDate}
                  minimumDate={today}
                  maximumDate={tenMonthsAhead}
                />
              )}
              {journey === "born" && (
                <DatePickerField
                  label="Birth date"
                  value={birthDate}
                  onChange={setBirthDate}
                  minimumDate={threeYearsAgo}
                  maximumDate={today}
                />
              )}
              <View style={s.row}>
                <TouchableOpacity
                  style={s.btnBack}
                  onPress={() => goNext(1)}
                  activeOpacity={0.7}
                >
                  <Text style={s.btnBackText}>Back</Text>
                </TouchableOpacity>
                {btn(
                  "Next",
                  () => goNext(3),
                  !journey ||
                    (journey === "pregnant" && !dueDate) ||
                    (journey === "born" && !birthDate)
                )}
              </View>
            </>
          )}
          {step === 3 && (
            <>
              <Text style={s.heading}>Who is/was the carrying partner?</Text>
              {opt("partner1", p1, "", carrying, setCarrying)}
              {opt("partner2", p2, "", carrying, setCarrying)}
              <View style={s.row}>
                <TouchableOpacity
                  style={s.btnBack}
                  onPress={() => goNext(2)}
                  activeOpacity={0.7}
                >
                  <Text style={s.btnBackText}>Back</Text>
                </TouchableOpacity>
                {btn("Next", () => goNext(4), !carrying)}
              </View>
            </>
          )}
          {step === 4 && (
            <>
              <Text style={s.heading}>
                {journey === "born" ? "Baby's name?" : "Almost done!"}
              </Text>
              {journey === "born" && (
                <>
                  <Text style={s.label}>Baby's name (optional)</Text>
                  <TextInput
                    style={s.input}
                    value={childName}
                    onChangeText={setChildName}
                    placeholder="Baby's name"
                    placeholderTextColor={COLORS.gray400}
                    autoCapitalize="words"
                  />
                </>
              )}
              <Text style={s.desc}>
                You're all set! You can always update these in Settings.
              </Text>
              <View style={s.row}>
                <TouchableOpacity
                  style={s.btnBack}
                  onPress={() => goNext(3)}
                  activeOpacity={0.7}
                >
                  <Text style={s.btnBackText}>Back</Text>
                </TouchableOpacity>
                {btn("Let's Go!", finish)}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: COLORS.cream },
  container: { flex: 1, backgroundColor: COLORS.cream },
  content: { padding: 24 },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.teal,
    textAlign: "center",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.gray500,
    textAlign: "center",
    marginTop: 4,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
    marginBottom: 28,
  },
  dot: { width: 40, height: 6, borderRadius: 3, backgroundColor: COLORS.gray200 },
  dotActive: { backgroundColor: COLORS.teal },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.gray800,
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: COLORS.gray700,
    marginBottom: 4,
    marginTop: 12,
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
  btn: {
    backgroundColor: COLORS.teal,
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginTop: 16,
    flex: 1,
  },
  btnText: { color: COLORS.white, fontWeight: "600", fontSize: 16 },
  btnBack: {
    backgroundColor: COLORS.gray100,
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginTop: 16,
    flex: 1,
    marginRight: 12,
  },
  btnBackText: { color: COLORS.gray700, fontWeight: "600", fontSize: 16 },
  row: { flexDirection: "row" },
  option: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.gray200,
    marginBottom: 10,
  },
  optionSelected: {
    borderColor: COLORS.teal,
    backgroundColor: COLORS.tealLight,
  },
  optLabel: { fontWeight: "600", color: COLORS.gray800, fontSize: 16 },
  optDesc: { color: COLORS.gray500, fontSize: 13, marginTop: 2 },
  desc: { color: COLORS.gray600, fontSize: 14, marginTop: 8, lineHeight: 20 },
});
