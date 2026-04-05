export function calculateStage(dueDate: string | null, birthDate: string | null): string {
  const now = new Date();

  if (birthDate) {
    const bd = new Date(birthDate);
    const days = Math.floor((now.getTime() - bd.getTime()) / 86400000);
    if (days < 0) return "TRIMESTER_3";
    if (days <= 90) return "POSTPARTUM";
    if (days <= 180) return "INFANT_3_6";
    if (days <= 365) return "INFANT_6_12";
    if (days <= 730) return "TODDLER_1_2";
    return "TODDLER_2_3";
  }

  if (dueDate) {
    const dd = new Date(dueDate);
    const daysUntilDue = Math.floor((dd.getTime() - now.getTime()) / 86400000);
    if (daysUntilDue < 0) {
      const daysSince = -daysUntilDue;
      if (daysSince <= 90) return "POSTPARTUM";
      if (daysSince <= 180) return "INFANT_3_6";
      if (daysSince <= 365) return "INFANT_6_12";
      if (daysSince <= 730) return "TODDLER_1_2";
      return "TODDLER_2_3";
    }
    const weeks = Math.max(1, Math.min(40, 40 - Math.floor(daysUntilDue / 7)));
    if (weeks <= 13) return "TRIMESTER_1";
    if (weeks <= 27) return "TRIMESTER_2";
    return "TRIMESTER_3";
  }

  return "TTC";
}

export function getPregnancyWeek(dueDate: string): number {
  const dd = new Date(dueDate);
  const now = new Date();
  const daysUntilDue = Math.floor((dd.getTime() - now.getTime()) / 86400000);
  return Math.max(1, Math.min(40, 40 - Math.floor(daysUntilDue / 7)));
}

export function getBabyAgeDays(birthDate: string): number {
  return Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / 86400000);
}

export function getBabyAgeMonths(birthDate: string): number {
  const bd = new Date(birthDate);
  const now = new Date();
  return (now.getFullYear() - bd.getFullYear()) * 12 + (now.getMonth() - bd.getMonth());
}

export function getStageLabel(stage: string): string {
  const labels: Record<string, string> = {
    TTC: "Trying to Conceive", TRIMESTER_1: "First Trimester", TRIMESTER_2: "Second Trimester",
    TRIMESTER_3: "Third Trimester", POSTPARTUM: "Postpartum", INFANT_3_6: "Infant (3-6 mo)",
    INFANT_6_12: "Infant (6-12 mo)", TODDLER_1_2: "Toddler (1-2 yr)", TODDLER_2_3: "Toddler (2-3 yr)",
  };
  return labels[stage] || stage;
}
