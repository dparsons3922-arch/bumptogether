import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { STAGES, COLORS } from "../lib/constants";
import { getProfile, getReadArticleIds, getBookmarkedIds } from "../lib/database";
import { getArticlesByStageAndCategory, Article } from "../lib/articles";
import type { RootStackScreenProps } from "../lib/types";

export default function CategoryArticlesScreen() {
  const route = useRoute<RootStackScreenProps<"CategoryArticles">["route"]>();
  const navigation = useNavigation<RootStackScreenProps<"CategoryArticles">["navigation"]>();
  const insets = useSafeAreaInsets();
  const { categoryKey, categoryLabel, categoryEmoji } = route.params;

  const [selectedStage, setSelectedStage] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      async function load() {
        const profile = await getProfile();
        const stage = selectedStage || profile?.stage || "TTC";
        if (!selectedStage && !cancelled) {
          setSelectedStage(stage);
        }

        const [arts, reads, bookmarks] = await Promise.all([
          getArticlesByStageAndCategory(stage, categoryKey),
          getReadArticleIds(),
          getBookmarkedIds(),
        ]);

        if (!cancelled) {
          setArticles(arts);
          setReadIds(reads);
          setBookmarkedIds(bookmarks);
        }
      }

      load();
      return () => {
        cancelled = true;
      };
    }, [categoryKey, selectedStage])
  );

  function handleStagePress(stageKey: string) {
    setSelectedStage(stageKey);
  }

  function renderArticle({ item }: { item: Article }) {
    const isRead = readIds.has(item.id);
    return (
      <TouchableOpacity
        style={s.articleCard}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Article", { articleId: item.id })}
      >
        <View style={s.articleContent}>
          <Text style={s.articleTitle}>{item.title}</Text>
          <View style={s.badgeRow}>
            {item.forPartner === 1 && (
              <View style={s.partnerBadge}>
                <Text style={s.partnerBadgeText}>For Partner</Text>
              </View>
            )}
            {isRead && (
              <View style={s.readBadge}>
                <Text style={s.readBadgeText}>Read</Text>
              </View>
            )}
          </View>
        </View>
        <Text style={s.chevron}>{"›"}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={s.container}>
      {/* Header */}
      <View style={[s.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={s.backBtn}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Text style={s.backArrow}>{"‹"}</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle} numberOfLines={1}>
          {categoryEmoji} {categoryLabel}
        </Text>
      </View>

      {/* Stage filter pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.pillsContainer}
        style={s.pillsScroll}
      >
        {STAGES.map((stage) => {
          const isSelected = selectedStage === stage.key;
          return (
            <TouchableOpacity
              key={stage.key}
              style={[s.pill, isSelected ? s.pillSelected : s.pillUnselected]}
              onPress={() => handleStagePress(stage.key)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  s.pillText,
                  isSelected ? s.pillTextSelected : s.pillTextUnselected,
                ]}
              >
                {stage.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Articles list */}
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={renderArticle}
        contentContainerStyle={[
          s.listContent,
          { paddingBottom: insets.bottom + 32 },
        ]}
        ListEmptyComponent={
          <View style={s.emptyContainer}>
            <Text style={s.emptyEmoji}>📄</Text>
            <Text style={s.emptyText}>No articles for this stage yet.</Text>
          </View>
        }
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  backBtn: {
    paddingRight: 8,
    paddingVertical: 4,
  },
  backArrow: {
    fontSize: 32,
    fontWeight: "400",
    color: COLORS.teal,
    lineHeight: 32,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.gray800,
    flexShrink: 1,
  },
  pillsScroll: {
    maxHeight: 48,
    paddingBottom: 4,
  },
  pillsContainer: {
    paddingHorizontal: 16,
    gap: 8,
    alignItems: "center",
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pillSelected: {
    backgroundColor: COLORS.teal,
  },
  pillUnselected: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray300,
  },
  pillText: {
    fontSize: 13,
    fontWeight: "500",
  },
  pillTextSelected: {
    color: COLORS.white,
  },
  pillTextUnselected: {
    color: COLORS.gray500,
  },
  listContent: {
    padding: 16,
  },
  articleCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  articleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.gray800,
    marginBottom: 6,
  },
  badgeRow: {
    flexDirection: "row",
    gap: 6,
  },
  partnerBadge: {
    backgroundColor: COLORS.blushLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  partnerBadgeText: {
    fontSize: 11,
    color: COLORS.blushDark,
    fontWeight: "600",
  },
  readBadge: {
    backgroundColor: COLORS.tealLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  readBadgeText: {
    fontSize: 11,
    color: COLORS.tealDark,
    fontWeight: "600",
  },
  chevron: {
    fontSize: 24,
    color: COLORS.gray400,
    marginLeft: 8,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },
  emptyEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 15,
    color: COLORS.gray400,
  },
});
