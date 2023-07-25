import { StaticImageData } from "next/image";

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

export interface Course {
  code: string;
  name: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  description: string[];
  backgroundImg: StaticImageData;
}

export interface Hackathon {
  name: string;
  backgroundImg: StaticImageData;
  description: string[];
}
