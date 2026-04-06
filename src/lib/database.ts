import * as SQLite from "expo-sqlite";

const PROFILE_COLUMNS = new Set([
  "partner1Name",
  "partner2Name",
  "carryingPartner",
  "dueDate",
  "birthDate",
  "childName",
  "stage",
  "onboarded",
]);

let db: SQLite.SQLiteDatabase;

export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync("bumptogether.db");
    await initDb();
  }
  return db;
}

async function initDb() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      partner1Name TEXT,
      partner2Name TEXT,
      carryingPartner TEXT,
      dueDate TEXT,
      birthDate TEXT,
      childName TEXT,
      stage TEXT DEFAULT 'TTC',
      onboarded INTEGER DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS article_reads (
      articleId TEXT PRIMARY KEY,
      readAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS bookmarks (
      articleId TEXT PRIMARY KEY,
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS milestones (
      milestoneKey TEXT PRIMARY KEY,
      label TEXT,
      completedAt TEXT
    );
    INSERT OR IGNORE INTO profile (id) VALUES (1);
  `);
}

export async function getProfile() {
  const d = await getDb();
  return await d.getFirstAsync<any>("SELECT * FROM profile WHERE id = 1");
}

export async function updateProfile(data: Record<string, any>) {
  const d = await getDb();
  const keys = Object.keys(data).filter((k) => PROFILE_COLUMNS.has(k));
  if (keys.length === 0) return;
  const sets = keys.map((k) => `${k} = ?`).join(", ");
  const vals = keys.map((k) => data[k]);
  await d.runAsync(`UPDATE profile SET ${sets} WHERE id = 1`, vals);
}

export async function isArticleRead(articleId: string) {
  const d = await getDb();
  const r = await d.getFirstAsync<any>(
    "SELECT 1 FROM article_reads WHERE articleId = ?",
    [articleId]
  );
  return !!r;
}

export async function toggleArticleRead(articleId: string) {
  const d = await getDb();
  const exists = await isArticleRead(articleId);
  if (exists) {
    await d.runAsync("DELETE FROM article_reads WHERE articleId = ?", [articleId]);
    return false;
  }
  await d.runAsync("INSERT INTO article_reads (articleId) VALUES (?)", [articleId]);
  return true;
}

export async function getReadArticleIds(): Promise<Set<string>> {
  const d = await getDb();
  const rows = await d.getAllAsync<any>("SELECT articleId FROM article_reads");
  return new Set(rows.map((r: any) => r.articleId));
}

export async function isBookmarked(articleId: string) {
  const d = await getDb();
  const r = await d.getFirstAsync<any>(
    "SELECT 1 FROM bookmarks WHERE articleId = ?",
    [articleId]
  );
  return !!r;
}

export async function toggleBookmark(articleId: string) {
  const d = await getDb();
  const exists = await isBookmarked(articleId);
  if (exists) {
    await d.runAsync("DELETE FROM bookmarks WHERE articleId = ?", [articleId]);
    return false;
  }
  await d.runAsync("INSERT INTO bookmarks (articleId) VALUES (?)", [articleId]);
  return true;
}

export async function getBookmarkedIds(): Promise<Set<string>> {
  const d = await getDb();
  const rows = await d.getAllAsync<any>("SELECT articleId FROM bookmarks");
  return new Set(rows.map((r: any) => r.articleId));
}

export async function getBookmarkedArticleIds(): Promise<string[]> {
  const d = await getDb();
  const rows = await d.getAllAsync<any>(
    "SELECT articleId FROM bookmarks ORDER BY createdAt DESC"
  );
  return rows.map((r: any) => r.articleId);
}

export async function getMilestones(): Promise<Record<string, string | null>> {
  const d = await getDb();
  const rows = await d.getAllAsync<any>(
    "SELECT milestoneKey, completedAt FROM milestones"
  );
  const map: Record<string, string | null> = {};
  for (const r of rows) map[r.milestoneKey] = r.completedAt;
  return map;
}

export async function toggleMilestone(key: string, label: string) {
  const d = await getDb();
  const existing = await d.getFirstAsync<any>(
    "SELECT completedAt FROM milestones WHERE milestoneKey = ?",
    [key]
  );
  if (existing?.completedAt) {
    await d.runAsync(
      "UPDATE milestones SET completedAt = NULL WHERE milestoneKey = ?",
      [key]
    );
    return null;
  }
  const now = new Date().toISOString().split("T")[0];
  await d.runAsync(
    "INSERT OR REPLACE INTO milestones (milestoneKey, label, completedAt) VALUES (?, ?, ?)",
    [key, label, now]
  );
  return now;
}

export async function deleteAllData() {
  const d = await getDb();
  await d.execAsync(
    "DELETE FROM article_reads; DELETE FROM bookmarks; DELETE FROM milestones; UPDATE profile SET partner1Name=NULL, partner2Name=NULL, carryingPartner=NULL, dueDate=NULL, birthDate=NULL, childName=NULL, stage='TTC', onboarded=0 WHERE id=1;"
  );
}
