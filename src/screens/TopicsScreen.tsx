import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CATEGORIES, COLORS } from "../lib/constants";
import type { TabScreenProps } from "../lib/types";

export default function TopicsScreen() {
  const navigation = useNavigation<TabScreenProps<"Topics">["navigation"]>();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={s.container}
      contentContainerStyle={[
        s.content,
        { paddingTop: insets.top + 12, paddingBottom: 24 },
      ]}
    >
      <Text style={s.heading}>Topics</Text>
      <Text style={s.subheading}>Explore articles by category</Text>
      <View style={s.grid}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.key}
            style={s.card}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("CategoryArticles" as any, {
                categoryKey: cat.key,
                categoryLabel: cat.label,
                categoryEmoji: cat.emoji,
              })
            }
          >
            <Text style={s.emoji}>{cat.emoji}</Text>
            <Text style={s.label}>{cat.label}</Text>
            <Text style={s.description}>{cat.description}</Text>
          </TouchableOpacity>
        ))}
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
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.gray800,
    marginBottom: 4,
    marginTop: 8,
  },
  subheading: {
    fontSize: 14,
    color: COLORS.gray500,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  emoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.gray800,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: COLORS.gray500,
    lineHeight: 16,
  },
});
