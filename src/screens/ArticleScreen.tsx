import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { CATEGORIES, STAGES, COLORS } from "../lib/constants";
import { isArticleRead, toggleArticleRead, isBookmarked, toggleBookmark } from "../lib/database";
import { getArticleById } from "../lib/articles";
import type { Article } from "../lib/articles";

function renderMarkdown(body: string): React.ReactNode[] {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Heading: ## text
    if (line.startsWith("## ")) {
      const text = line.slice(3);
      elements.push(
        <Text key={i} style={ms.heading}>
          {renderInline(text)}
        </Text>
      );
      continue;
    }

    // Bullet: - text
    if (line.startsWith("- ")) {
      const text = line.slice(2);
      elements.push(
        <View key={i} style={ms.bulletRow}>
          <Text style={ms.bullet}>{"\u2022"}</Text>
          <Text style={ms.bulletText}>{renderInline(text)}</Text>
        </View>
      );
      continue;
    }

    // Empty line = spacing
    if (line.trim() === "") {
      elements.push(<View key={i} style={ms.spacer} />);
      continue;
    }

    // Regular paragraph
    elements.push(
      <Text key={i} style={ms.paragraph}>
        {renderInline(line)}
      </Text>
    );
  }

  return elements;
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Text key={match.index} style={ms.bold}>
        {match[1]}
      </Text>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

const ms = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.gray800,
    marginTop: 16,
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: "row",
    paddingLeft: 8,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 15,
    color: COLORS.gray600,
    marginRight: 8,
    lineHeight: 22,
  },
  bulletText: {
    fontSize: 15,
    color: COLORS.gray700,
    lineHeight: 22,
    flex: 1,
  },
  paragraph: {
    fontSize: 15,
    color: COLORS.gray700,
    lineHeight: 22,
    marginBottom: 4,
  },
  bold: {
    fontWeight: "700",
  },
  spacer: {
    height: 8,
  },
});

export default function ArticleScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { articleId } = route.params;

  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [read, setRead] = useState(false);
  const [saved, setSaved] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      async function load() {
        const art = getArticleById(articleId);
        const [r, b] = await Promise.all([
          isArticleRead(articleId),
          isBookmarked(articleId),
        ]);
        if (!cancelled) {
          setArticle(art);
          setRead(r);
          setSaved(b);
        }
      }

      load();
      return () => {
        cancelled = true;
      };
    }, [articleId])
  );

  async function handleToggleRead() {
    const nowRead = await toggleArticleRead(articleId);
    setRead(nowRead);
  }

  async function handleToggleSave() {
    const nowSaved = await toggleBookmark(articleId);
    setSaved(nowSaved);
  }

  if (!article) {
    return (
      <View style={s.container}>
        <Text style={s.loading}>Loading...</Text>
      </View>
    );
  }

  const category = CATEGORIES.find((c) => c.key === article.category);
  const stage = STAGES.find((st) => st.key === article.stage);

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={s.backBtn}>
        <Text style={s.backArrow}>{"<"} Back</Text>
      </TouchableOpacity>

      {/* Tag pills */}
      <View style={s.tagsRow}>
        {category && (
          <View style={s.tagPill}>
            <Text style={s.tagText}>
              {category.emoji} {category.label}
            </Text>
          </View>
        )}
        {stage && (
          <View style={s.tagPill}>
            <Text style={s.tagText}>{stage.label}</Text>
          </View>
        )}
        {article.forPartner === 1 && (
          <View style={[s.tagPill, s.partnerPill]}>
            <Text style={s.partnerTagText}>For Partner</Text>
          </View>
        )}
      </View>

      {/* Title */}
      <Text style={s.title}>{article.title}</Text>

      {/* Action buttons */}
      <View style={s.actionsRow}>
        <TouchableOpacity
          style={[s.actionBtn, read && s.actionBtnActive]}
          onPress={handleToggleRead}
        >
          <Text style={[s.actionText, read && s.actionTextActive]}>
            {read ? "Marked as Read" : "Mark as Read"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.actionBtn, saved && s.actionBtnActive]}
          onPress={handleToggleSave}
        >
          <Text style={[s.actionText, saved && s.actionTextActive]}>
            {saved ? "Saved" : "Save"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={s.bodyCard}>{renderMarkdown(article.body)}</View>

      {/* Disclaimer */}
      <View style={s.disclaimerBox}>
        <Text style={s.disclaimerText}>
          This content is for informational purposes only and is not a substitute for
          professional medical advice, diagnosis, or treatment. Always consult your
          healthcare provider with questions about your health or pregnancy.
        </Text>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  content: {
    padding: 16,
    paddingTop: 56,
    paddingBottom: 40,
  },
  loading: {
    fontSize: 16,
    color: COLORS.gray400,
    textAlign: "center",
    marginTop: 60,
  },
  backBtn: {
    paddingVertical: 8,
    marginBottom: 8,
  },
  backArrow: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.teal,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 12,
  },
  tagPill: {
    backgroundColor: COLORS.tealLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: COLORS.tealDark,
    fontWeight: "600",
  },
  partnerPill: {
    backgroundColor: COLORS.blushLight,
  },
  partnerTagText: {
    fontSize: 12,
    color: COLORS.blushDark,
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.gray800,
    marginBottom: 16,
    lineHeight: 30,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  actionBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray300,
  },
  actionBtnActive: {
    backgroundColor: COLORS.teal,
    borderColor: COLORS.teal,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.gray600,
  },
  actionTextActive: {
    color: COLORS.white,
  },
  bodyCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  disclaimerBox: {
    backgroundColor: COLORS.creamDark,
    borderRadius: 12,
    padding: 14,
  },
  disclaimerText: {
    fontSize: 12,
    color: COLORS.gray500,
    lineHeight: 18,
    fontStyle: "italic",
  },
});
