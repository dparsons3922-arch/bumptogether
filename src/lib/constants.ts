export const CATEGORIES = [
  { key: "MEDICAL", label: "Medical & Body Changes", emoji: "🩺", description: "Physical changes for the carrying partner" },
  { key: "BABY_DEVELOPMENT", label: "Baby's Development", emoji: "👶", description: "Week-by-week and month-by-month milestones" },
  { key: "PARTNER_GUIDE", label: "Partner's Guide", emoji: "💑", description: "How each partner can support the other" },
  { key: "FINANCES", label: "Finances & Planning", emoji: "💰", description: "Insurance, leave, budgeting, childcare" },
  { key: "MENTAL_HEALTH", label: "Mental Health & Wellness", emoji: "🧠", description: "PPD/PPA, communication, coping" },
  { key: "NUTRITION", label: "Nutrition & Feeding", emoji: "🍽️", description: "Pregnancy nutrition, feeding, solids" },
  { key: "SLEEP", label: "Sleep", emoji: "😴", description: "Safe sleep, training, nap transitions" },
  { key: "MILESTONES_PRACTICAL", label: "Milestones & Practical", emoji: "📋", description: "Car seats, childproofing, daycare" },
] as const;

export const STAGES = [
  { key: "TTC", label: "Trying to Conceive" },
  { key: "TRIMESTER_1", label: "Trimester 1" },
  { key: "TRIMESTER_2", label: "Trimester 2" },
  { key: "TRIMESTER_3", label: "Trimester 3" },
  { key: "POSTPARTUM", label: "Postpartum (0-3 mo)" },
  { key: "INFANT_3_6", label: "Infant (3-6 mo)" },
  { key: "INFANT_6_12", label: "Infant (6-12 mo)" },
  { key: "TODDLER_1_2", label: "Toddler (1-2 yr)" },
  { key: "TODDLER_2_3", label: "Toddler (2-3 yr)" },
] as const;

export const COLORS = {
  teal: "#0d9488",
  tealLight: "#ccfbf1",
  tealDark: "#0f766e",
  blush: "#f8b4b4",
  blushLight: "#fef5f5",
  blushDark: "#d94f4f",
  cream: "#fffdf7",
  creamDark: "#fef9ec",
  warmBg: "#fdf8f3",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  white: "#ffffff",
};

export const FRUIT_SIZES: Record<number, string> = {
  4: "a poppy seed", 5: "a sesame seed", 6: "a lentil", 7: "a blueberry",
  8: "a raspberry", 9: "a cherry", 10: "a prune", 11: "a lime",
  12: "a plum", 13: "a peach", 14: "a lemon", 15: "an apple",
  16: "an avocado", 17: "a pear", 18: "a bell pepper", 19: "a mango",
  20: "a banana", 21: "a carrot", 22: "a papaya", 23: "a grapefruit",
  24: "an ear of corn", 25: "an eggplant", 26: "a zucchini", 27: "a cauliflower",
  28: "a coconut", 29: "a butternut squash", 30: "a cabbage", 31: "a coconut",
  32: "a jicama", 33: "a pineapple", 34: "a cantaloupe", 35: "a honeydew",
  36: "a head of romaine", 37: "a winter melon", 38: "a leek",
  39: "a mini watermelon", 40: "a small pumpkin",
};

export const STAGE_MILESTONES: Record<string, { key: string; label: string }[]> = {
  POSTPARTUM: [
    { key: "first_smile", label: "First social smile" },
    { key: "holds_head_up", label: "Holds head up briefly" },
    { key: "tracks_objects", label: "Tracks objects with eyes" },
    { key: "coos", label: "Coos and makes sounds" },
  ],
  INFANT_3_6: [
    { key: "rolls_over", label: "Rolls over" },
    { key: "laughs", label: "Laughs out loud" },
    { key: "reaches_for_toys", label: "Reaches for and grabs toys" },
    { key: "sits_with_support", label: "Sits with support" },
  ],
  INFANT_6_12: [
    { key: "sits_independently", label: "Sits independently" },
    { key: "crawls", label: "Crawls" },
    { key: "first_words", label: "First words (mama/dada)" },
    { key: "pulls_to_stand", label: "Pulls to stand" },
    { key: "waves_bye", label: "Waves bye-bye" },
  ],
  TODDLER_1_2: [
    { key: "first_steps", label: "First steps" },
    { key: "walks_independently", label: "Walks independently" },
    { key: "says_several_words", label: "Says several words" },
    { key: "stacks_blocks", label: "Stacks blocks" },
    { key: "uses_spoon", label: "Uses a spoon" },
  ],
  TODDLER_2_3: [
    { key: "runs", label: "Runs well" },
    { key: "two_word_phrases", label: "Uses 2-word phrases" },
    { key: "potty_training_start", label: "Shows potty training readiness" },
    { key: "kicks_ball", label: "Kicks a ball" },
    { key: "plays_pretend", label: "Plays pretend" },
  ],
};

export const DAILY_TIDBITS: Record<string, string[]> = {
  TTC: [
    "Folic acid is recommended at least 1 month before conception — 400-800mcg daily.",
    "The fertile window is about 6 days: 5 days before ovulation and the day of ovulation.",
    "Both partners' health matters! Balanced diet and exercise improve fertility.",
  ],
  TRIMESTER_1: [
    "Morning sickness affects up to 80% of pregnant people. Small, frequent meals help.",
    "Your baby's heart starts beating around week 6!",
    "Fatigue is very common — your body is building the placenta.",
  ],
  TRIMESTER_2: [
    "Many feel an energy boost in the second trimester — the 'honeymoon phase.'",
    "Around weeks 18-20, you may feel baby move for the first time — 'quickening.'",
    "Your baby can now hear sounds! Talking and music can be bonding.",
  ],
  TRIMESTER_3: [
    "Braxton Hicks are practice contractions — normal and help your body prepare.",
    "Your baby gains about half a pound per week now!",
    "Nesting instincts may kick in — great time to prep the nursery.",
  ],
  POSTPARTUM: [
    "The 'fourth trimester' is real. Both baby and parents are adjusting.",
    "Skin-to-skin contact regulates baby's temperature and heart rate.",
    "Accept help when offered. Support with meals and chores makes a difference.",
  ],
  INFANT_3_6: [
    "Tummy time strengthens neck, back, and shoulder muscles.",
    "Babies typically double their birth weight by 4-5 months.",
    "Laughter usually appears around 3-4 months!",
  ],
  INFANT_6_12: [
    "Separation anxiety peaks around 8-10 months — a sign of healthy attachment.",
    "Baby-proofing is essential now that your little one is on the move!",
    "Introducing variety of foods now helps prevent picky eating later.",
  ],
  TODDLER_1_2: [
    "Toddlers learn through play. Stacking blocks builds cognitive skills.",
    "Tantrums are normal — your toddler is learning to process big emotions.",
    "Consistent routines help toddlers feel secure.",
  ],
  TODDLER_2_3: [
    "Language explodes between ages 2-3 — several new words every day!",
    "Potty training readiness varies widely. Most are ready between 2-3.",
    "Imaginative play supports cognitive and social development.",
  ],
};
