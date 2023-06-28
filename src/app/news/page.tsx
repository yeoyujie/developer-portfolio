"use client";

import { useState, useEffect } from "react";
import { ViewControls } from "@/components/ViewControls";
import { CardView } from "@/components/CardView";
import { TableView } from "@/components/TableView";

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id: string;
  name: string;
}

type ViewMode = "card" | "tab";

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const storedViewMode = localStorage.getItem('viewMode');
    return storedViewMode ? (storedViewMode as ViewMode) : 'card';
  });
  const [numArticles, setNumArticles] = useState(25);

  // Fetch top headlines from News API
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${numArticles}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      const NewsApiResponse = await res.json();
      setArticles(NewsApiResponse.articles);
    };
    fetchArticles();
  }, [numArticles]);

  useEffect(() => {
    localStorage.setItem('viewMode', viewMode);
  }, [viewMode]);

  return (
    <div>
      <ViewControls
        viewMode={viewMode}
        setViewMode={setViewMode}
        numArticles={numArticles}
        setNumArticles={setNumArticles}
      />
      {viewMode === "card" ? (
        <CardView articles={articles} />
      ) : (
        <TableView articles={articles} />
      )}
    </div>
  );
}
