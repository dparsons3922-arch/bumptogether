import rawArticles from "../data/articles.json";
import funPregnancy from "../data/fun_pregnancy.json";
import funBaby from "../data/fun_baby.json";

export type Article = {
  id: string;
  title: string;
  body: string;
  category: string;
  stage: string;
  subStage: string | null;
  forPartner: number;
};

const articles: Article[] = [
  ...(rawArticles as Article[]),
  ...(funPregnancy as Article[]),
  ...(funBaby as Article[]),
];

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
  const articleMap = new Map(articles.map((a) => [a.id, a]));
  return ids.map((id) => articleMap.get(id)).filter((a): a is Article => !!a);
}

export function getAllArticles(): Article[] {
  return articles;
}
