import { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, FRUIT_SIZES, DAILY_TIDBITS } from "../lib/constants";
import { getProfile, updateProfile } from "../lib/database";
import {
  getPregnancyWeek,
  getBabyAgeDays,
  getBabyAgeMonths,
  getStageLabel,
  calculateStage,
} from "../lib/stage";
import type { TabScreenProps } from "../lib/types";

function getGreetingTime(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
}

function getDailyTidbit(stage: string): string {
  const tidbits = DAILY_TIDBITS[stage] ?? DAILY_TIDBITS["TTC"];
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return tidbits[dayOfYear % tidbits.length];
}

export default function DashboardScreen() {
  const navigation = useNavigation<TabScreenProps<"Home">["navigation"]>();
  const insets = useSafeAreaInsets();
  const [profile, setProfile] = useState<any>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadProfile = useCallback(async () => {
    const p = await getProfile();
    if (!p) return;

    const computed = calculateStage(p.dueDate, p.birthDate);
    if (computed !== p.stage) {
      await updateProfile({ stage: computed });
      p.stage = computed;
    }

    setProfile(p);
  }, []);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      (async () => {
        await loadProfile();
      })();
      return () => {
        active = false;
      };
    }, [loadProfile])
  );

  async function onRefresh() {
    setRefreshing(true);
    await loadProfile();
    setRefreshing(false);
  }

  if (!profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const stage: string = profile.stage ?? "TTC";
  const partner1 = profile.partner1Name || "Partner 1";
  const partner2 = profile.partner2Name || "Partner 2";
  const childName = profile.childName || null;

  const renderStageWidget = () => {
    if (stage === "TTC") {
      return (
        <View style={styles.widgetCard}>
          <Text style={styles.widgetEmoji}>✨</Text>
          <Text style={styles.widgetTitle}>Your Journey Awaits</Text>
          <Text style={styles.widgetBody}>
            Every journey starts with a single step. You've got this — together!
          </Text>
        </View>
      );
    }

    if (stage.startsWith("TRIMESTER") && profile.dueDate) {
      const week = getPregnancyWeek(profile.dueDate);
      const fruit = FRUIT_SIZES[week] ?? "a little miracle";
      const progress = week / 40;

      return (
        <View style={styles.widgetCard}>
          <Text style={styles.widgetLabel}>PREGNANCY PROGRESS</Text>
          <Text style={styles.widgetTitle}>Week {week}</Text>
          <Text style={styles.widgetBody}>
            Your baby is the size of {fruit}!
          </Text>
          <View style={styles.progressBarOuter}>
            <View
              style={[
                styles.progressBarInner,
                { width: `${Math.round(progress * 100)}%` },
              ]}
            />
          </View>
          <Text style={styles.progressText}>{week} of 40 weeks</Text>
        </View>
      );
    }

    if (
      stage === "POSTPARTUM" &&
      (profile.birthDate || profile.dueDate)
    ) {
      const refDate = profile.birthDate || profile.dueDate;
      const days = getBabyAgeDays(refDate);
      const displayName = childName || "Your baby";
      return (
        <View style={styles.widgetCard}>
          <Text style={styles.widgetEmoji}>🍼</Text>
          <Text style={styles.widgetTitle}>
            {displayName} is {days} {days === 1 ? "day" : "days"} old!
          </Text>
          <Text style={styles.widgetBody}>
            Every day is a new adventure in this beautiful chapter.
          </Text>
        </View>
      );
    }

    if (
      (stage.startsWith("INFANT") || stage.startsWith("TODDLER")) &&
      (profile.birthDate || profile.dueDate)
    ) {
      const refDate = profile.birthDate || profile.dueDate;
      const months = getBabyAgeMonths(refDate);
      const displayName = childName || "Your little one";
      return (
        <View style={styles.widgetCard}>
          <Text style={styles.widgetEmoji}>
            {stage.startsWith("TODDLER") ? "🧒" : "👶"}
          </Text>
          <Text style={styles.widgetTitle}>
            {displayName} is {months} {months === 1 ? "month" : "months"} old!
          </Text>
          <Text style={styles.widgetBody}>
            So many milestones ahead — enjoy every moment together.
          </Text>
        </View>
      );
    }

    return null;
  };

  const quickLinks: { label: string; icon: string; screen: string }[] = [
    { label: "Topics", icon: "📚", screen: "Topics" },
    { label: "Summary", icon: "📋", screen: "Summary" },
    { label: "Milestones", icon: "🏆", screen: "Milestones" },
    { label: "Saved", icon: "🔖", screen: "Saved" },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 40 },
      ]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={COLORS.teal}
        />
      }
    >
      {/* Greeting */}
      <Text style={styles.greeting}>
        Good {getGreetingTime()}, {partner1} & {partner2}!
      </Text>

      {/* Stage label */}
      <View style={styles.stageBadge}>
        <Text style={styles.stageBadgeText}>{getStageLabel(stage)}</Text>
      </View>

      {/* Stage widget */}
      {renderStageWidget()}

      {/* Daily tidbit */}
      <View style={styles.tidbitCard}>
        <Text style={styles.tidbitLabel}>TODAY'S TIDBIT</Text>
        <Text style={styles.tidbitBody}>{getDailyTidbit(stage)}</Text>
      </View>

      {/* Quick links */}
      <Text style={styles.sectionTitle}>Quick Links</Text>
      <View style={styles.quickLinksGrid}>
        {quickLinks.map((link) => (
          <TouchableOpacity
            key={link.screen}
            style={styles.quickLinkButton}
            onPress={() => navigation.navigate(link.screen as any)}
            activeOpacity={0.7}
          >
            <Text style={styles.quickLinkIcon}>{link.icon}</Text>
            <Text style={styles.quickLinkLabel}>{link.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.settingsBtn}
        onPress={() => navigation.navigate("Settings" as any)}
        activeOpacity={0.7}
      >
        <Text style={styles.settingsBtnText}>Settings</Text>
      </TouchableOpacity>

      <Text style={styles.disclaimer}>
        BumpTogether provides educational information only. Always consult your
        healthcare provider for medical advice.
      </Text>
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
  greeting: {
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
  widgetCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  widgetLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.teal,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  widgetEmoji: {
    fontSize: 36,
    marginBottom: 8,
  },
  widgetTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.gray800,
    marginBottom: 6,
    textAlign: "center",
  },
  widgetBody: {
    fontSize: 15,
    color: COLORS.gray600,
    textAlign: "center",
    lineHeight: 22,
  },
  progressBarOuter: {
    width: "100%",
    height: 10,
    backgroundColor: COLORS.gray200,
    borderRadius: 5,
    marginTop: 14,
    overflow: "hidden",
  },
  progressBarInner: {
    height: "100%",
    backgroundColor: COLORS.teal,
    borderRadius: 5,
  },
  progressText: {
    fontSize: 13,
    color: COLORS.gray500,
    marginTop: 6,
  },
  tidbitCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    padding: 18,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  tidbitLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.teal,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  tidbitBody: {
    fontSize: 15,
    color: COLORS.gray700,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.gray800,
    marginBottom: 12,
  },
  quickLinksGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickLinkButton: {
    width: "48%",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  quickLinkIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  quickLinkLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.tealDark,
  },
  settingsBtn: {
    alignItems: "center",
    paddingVertical: 14,
    marginTop: 8,
  },
  settingsBtnText: {
    color: COLORS.gray500,
    fontSize: 15,
  },
  disclaimer: {
    color: COLORS.gray400,
    fontSize: 11,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 16,
  },
});
