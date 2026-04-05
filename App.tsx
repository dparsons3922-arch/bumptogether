import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { getProfile } from "./src/lib/database";
import { COLORS } from "./src/lib/constants";

import OnboardingScreen from "./src/screens/OnboardingScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import TopicsScreen from "./src/screens/TopicsScreen";
import CategoryArticlesScreen from "./src/screens/CategoryArticlesScreen";
import ArticleScreen from "./src/screens/ArticleScreen";
import BookmarksScreen from "./src/screens/BookmarksScreen";
import SummaryScreen from "./src/screens/SummaryScreen";
import MilestonesScreen from "./src/screens/MilestonesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  const icons: Record<string, string> = {
    Home: "🏠", Topics: "📚", Summary: "📅", Milestones: "⭐", Saved: "🔖",
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>{icons[label] || "📄"}</Text>
      <Text style={{ fontSize: 10, color: focused ? COLORS.teal : COLORS.gray400, marginTop: 2 }}>
        {label}
      </Text>
    </View>
  );
}

function HomeTabs({ onReset }: { onReset: () => void }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 70, paddingBottom: 10, borderTopColor: "#fde8e8" },
        tabBarIcon: ({ focused }) => <TabIcon label={route.name} focused={focused} />,
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Topics" component={TopicsScreen} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Milestones" component={MilestonesScreen} />
      <Tab.Screen name="Saved" component={BookmarksScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [onboarded, setOnboarded] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    (async () => {
      const profile = await getProfile();
      setOnboarded(!!profile?.onboarded);
      setLoading(false);
    })();
  }, [key]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.cream }}>
        <ActivityIndicator size="large" color={COLORS.teal} />
      </View>
    );
  }

  if (!onboarded) {
    return (
      <>
        <StatusBar style="dark" />
        <OnboardingScreen onComplete={() => { setOnboarded(true); setKey((k) => k + 1); }} />
      </>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs">
            {(props) => <HomeTabs {...props} onReset={() => { setOnboarded(false); setKey((k) => k + 1); }} />}
          </Stack.Screen>
          <Stack.Screen name="CategoryArticles" component={CategoryArticlesScreen} />
          <Stack.Screen name="Article" component={ArticleScreen} />
          <Stack.Screen name="Settings">
            {() => <SettingsScreen onReset={() => { setOnboarded(false); setKey((k) => k + 1); }} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
