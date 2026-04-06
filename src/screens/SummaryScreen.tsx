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
  const insets = useSafeAreaInsets();
  const [stage, setStage] = useState("TTC");
  const [milestoneStatus, setMilestoneStatus] = useState<
    Record<string, string | null>
  >({});
  const [recommendedArticles, setRecommendedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(async () => {
    const profile = await getProfile();
    if (!profile) return;

    const currentStage = profile.stage ?? "TTC";
    setStage(currentStage);

    const [milestones, readIds] = await Promise.all([
      getMilestones(),
      getReadArticleIds(),
    ]);

    setMilestoneStatus(milestones);

    const stageArticles = getArticlesByStage(currentStage);
    const unread = stageArticles.filter((a) => !readIds.has(a.id));
    setRecommendedArticles(unread.slice(0, 5));
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      loadData();
      return () => {
        active = false;
      };
    }, [loadData])
  );

  async function onRefresh() {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const stageMilestones = (STAGE_MILESTONES[stage] ?? []).slice(0, 4);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 40 },
      ]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={COLORS.teal}
        />
      }
    >
      <Text style={styles.heading}>This Week's Summary</Text>

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
            <Text style={styles.linkButtonText}>View all milestones</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Recommended reads */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>RECOMMENDED READS</Text>
        {recommendedArticles.length > 0 ? (
          recommendedArticles.map((article) => (
            <TouchableOpacity
              key={article.id}
              style={styles.articleRow}
              onPress={() =>
                navigation.navigate("Article", { articleId: article.id })
              }
              activeOpacity={0.7}
            >
              <Text style={styles.articleTitle} numberOfLines={2}>
                {article.title}
              </Text>
              <Text style={styles.articleArrow}>{"›"}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyText}>
            You're all caught up! Check back as new content is added.
          </Text>
        )}
      </View>
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
    borderColor: COLORS.gray200,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
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
