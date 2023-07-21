//guess the country
export interface CountryStatus {
  name: string;
  flag: string;
  status: "correct" | "skipped";
}

export interface Country {
  name: string;
  flag: string;
}

// news
export type ViewMode = "card" | "tab";

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}
