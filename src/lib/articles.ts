import rawArticles from "../data/articles.json";

export type Article = {
  id: string;
  title: string;
  body: string;
  category: string;
  stage: string;
  subStage: string | null;
  forPartner: number;
};

const articles: Article[] = rawArticles as Article[];

export function getArticlesByStageAndCategory(stage: string, category: string): Article[] {
  return articles.filter((a) => a.stage === stage && a.category === category);
}

export function getArticlesByStage(stage: string): Article[] {
  return articles.filter((a) => a.stage === stage);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getArticlesByIds(ids: string[]): Article[] {
  const idSet = new Set(ids);
  return articles.filter((a) => idSet.has(a.id));
}

export function getAllArticles(): Article[] {
  return articles;
}
