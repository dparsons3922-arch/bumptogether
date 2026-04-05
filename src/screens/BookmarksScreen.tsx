import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { CATEGORIES, COLORS } from "../lib/constants";
import { getBookmarkedArticleIds } from "../lib/database";
import { getArticlesByIds, Article } from "../lib/articles";

export default function BookmarksScreen() {
  const nav = useNavigation<any>();
  const [articles, setArticles] = useState<Article[]>([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const ids = await getBookmarkedArticleIds();
        setArticles(getArticlesByIds(ids));
      })();
    }, [])
  );

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>Saved Articles</Text>
      <Text style={s.subtitle}>Your bookmarked reads</Text>

      {articles.length === 0 ? (
        <View style={s.empty}>
          <Text style={s.emptyText}>No saved articles yet.</Text>
          <Text style={s.emptyHint}>Browse topics and save what interests you!</Text>
        </View>
      ) : (
        articles.map((a) => {
          const cat = CATEGORIES.find((c) => c.key === a.category);
          return (
            <TouchableOpacity key={a.id} style={s.card} onPress={() => nav.navigate("Article", { articleId: a.id })}>
              <Text style={s.cardTitle}>{a.title}</Text>
              <View style={s.tags}>
                {cat && <Text style={s.tag}>{cat.emoji} {cat.label}</Text>}
                {a.forPartner === 1 && <Text style={s.partnerTag}>For Partner</Text>}
              </View>
            </TouchableOpacity>
          );
        })
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  content: { padding: 20, paddingTop: 60, paddingBottom: 100 },
  title: { fontSize: 24, fontWeight: "700", color: COLORS.gray800 },
  subtitle: { fontSize: 14, color: COLORS.gray500, marginTop: 4, marginBottom: 20 },
  empty: { backgroundColor: COLORS.white, borderRadius: 16, padding: 32, alignItems: "center", borderWidth: 1, borderColor: "#fde8e8" },
  emptyText: { color: COLORS.gray500, fontSize: 15 },
  emptyHint: { color: COLORS.gray400, fontSize: 13, marginTop: 8 },
  card: { backgroundColor: COLORS.white, borderRadius: 14, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: "#fde8e8" },
  cardTitle: { fontSize: 16, fontWeight: "600", color: COLORS.gray800 },
  tags: { flexDirection: "row", gap: 8, marginTop: 8, flexWrap: "wrap" },
  tag: { fontSize: 11, backgroundColor: COLORS.tealLight, color: COLORS.tealDark, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, overflow: "hidden" },
  partnerTag: { fontSize: 11, backgroundColor: COLORS.blushLight, color: COLORS.blushDark, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, overflow: "hidden" },
});
