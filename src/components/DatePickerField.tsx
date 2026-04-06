import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import DateTimePicker, {
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { COLORS } from "../lib/constants";

type Props = {
  label: string;
  value: string | null; // "YYYY-MM-DD" or null
  onChange: (dateString: string) => void;
  minimumDate?: Date;
  maximumDate?: Date;
};

function parseDate(str: string | null): Date {
  if (str) {
    const d = new Date(str + "T12:00:00");
    if (!isNaN(d.getTime())) return d;
  }
  return new Date();
}

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDisplay(str: string | null): string {
  if (!str) return "Tap to select a date";
  const d = parseDate(str);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function DatePickerField({
  label,
  value,
  onChange,
  minimumDate,
  maximumDate,
}: Props) {
  const [show, setShow] = useState(false);

  function handleChange(event: DateTimePickerEvent, selectedDate?: Date) {
    if (Platform.OS === "android") {
      setShow(false);
    }
    if (event.type === "set" && selectedDate) {
      onChange(formatDate(selectedDate));
    }
    if (event.type === "dismissed") {
      setShow(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.field}
        onPress={() => setShow(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.fieldText, !value && styles.placeholder]}>
          {formatDisplay(value)}
        </Text>
        <Text style={styles.icon}>📅</Text>
      </TouchableOpacity>
      {show && (
        <View style={styles.pickerContainer}>
          <DateTimePicker
            value={parseDate(value)}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleChange}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            themeVariant="light"
          />
          {Platform.OS === "ios" && (
            <TouchableOpacity
              style={styles.doneBtn}
              onPress={() => setShow(false)}
            >
              <Text style={styles.doneBtnText}>Done</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 12 },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: COLORS.gray700,
    marginBottom: 4,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gray50,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.gray200,
  },
  fieldText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.gray800,
  },
  placeholder: {
    color: COLORS.gray400,
  },
  icon: {
    fontSize: 18,
  },
  pickerContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    overflow: "hidden",
  },
  doneBtn: {
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray200,
  },
  doneBtnText: {
    color: COLORS.teal,
    fontWeight: "600",
    fontSize: 16,
  },
});
