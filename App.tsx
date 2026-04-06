import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";

import { getProfile } from "./src/lib/database";
import { COLORS } from "./src/lib/constants";
import type { RootStackParamList, TabParamList } from "./src/lib/types";
import ErrorBoundary from "./src/components/ErrorBoundary";

import OnboardingScreen from "./src/screens/OnboardingScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import TopicsScreen from "./src/screens/TopicsScreen";
import CategoryArticlesScreen from "./src/screens/CategoryArticlesScreen";
import ArticleScreen from "./src/screens/ArticleScreen";
import BookmarksScreen from "./src/screens/BookmarksScreen";
import SummaryScreen from "./src/screens/SummaryScreen";
import MilestonesScreen from "./src/screens/MilestonesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  const icons: Record<string, string> = {
    Home: "🏠",
    Topics: "📚",
    Summary: "📅",
    Milestones: "⭐",
    Saved: "🔖",
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>{icons[label] || "📄"}</Text>
      <Text
        style={{
          fontSize: 10,
          color: focused ? COLORS.teal : COLORS.gray400,
          marginTop: 2,
          fontWeight: focused ? "600" : "400",
        }}
      >
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
        tabBarStyle: {
          height: 85,
          paddingBottom: 28,
          paddingTop: 8,
          borderTopColor: COLORS.gray200,
          borderTopWidth: 1,
          backgroundColor: COLORS.white,
        },
        tabBarIcon: ({ focused }) => (
          <TabIcon label={route.name} focused={focused} />
        ),
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
      try {
        const profile = await getProfile();
        setOnboarded(!!profile?.onboarded);
      } catch {
        setOnboarded(false);
      } finally {
        setLoading(false);
        await SplashScreen.hideAsync();
      }
    })();
  }, [key]);

  if (loading) {
    return (
      <SafeAreaProvider>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.cream,
          }}
        >
          <ActivityIndicator size="large" color={COLORS.teal} />
        </View>
      </SafeAreaProvider>
    );
  }

  if (!onboarded) {
    return (
      <SafeAreaProvider>
        <ErrorBoundary>
          <StatusBar style="dark" />
          <OnboardingScreen
            onComplete={() => {
              setOnboarded(true);
              setKey((k) => k + 1);
            }}
          />
        </ErrorBoundary>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs">
              {(props) => (
                <HomeTabs
                  {...props}
                  onReset={() => {
                    setOnboarded(false);
                    setKey((k) => k + 1);
                  }}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="CategoryArticles"
              component={CategoryArticlesScreen}
            />
            <Stack.Screen name="Article" component={ArticleScreen} />
            <Stack.Screen name="Settings">
              {() => (
                <SettingsScreen
                  onReset={() => {
                    setOnboarded(false);
                    setKey((k) => k + 1);
                  }}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
