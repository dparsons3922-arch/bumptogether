import React, { Component, type ReactNode } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../lib/constants";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.emoji}>💛</Text>
          <Text style={styles.title}>Something went wrong</Text>
          <Text style={styles.body}>
            Don't worry — your data is safe. Try restarting the app.
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.setState({ hasError: false })}
          >
            <Text style={styles.btnText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  emoji: { fontSize: 48, marginBottom: 16 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.gray800,
    marginBottom: 8,
    textAlign: "center",
  },
  body: {
    fontSize: 15,
    color: COLORS.gray600,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  btn: {
    backgroundColor: COLORS.teal,
    borderRadius: 12,
    paddingHorizontal: 28,
    paddingVertical: 14,
  },
  btnText: { color: COLORS.white, fontWeight: "600", fontSize: 16 },
});
