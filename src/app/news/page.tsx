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
    if (typeof localStorage !== "undefined") {
      const storedViewMode = localStorage.getItem("viewMode");
      return storedViewMode ? (storedViewMode as ViewMode) : "card";
    } else {
      return "card";
    }
  });
  const [numArticles, setNumArticles] = useState(50);

  useEffect(() => {
    const fetchArticles = async () => {
      // Fetch top headlines from News API
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      const NewsApiResponse = await res.json();
      setArticles(NewsApiResponse.articles);
    };
    fetchArticles();
  }, []);

  // Save viewMode to localStorage
  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  return (
    <div>
      <ViewControls
        viewMode={viewMode}
        setViewMode={setViewMode}
        numArticles={numArticles}
        setNumArticles={setNumArticles}
      />
      {/* We choose to display the number of articles to be shown instead of recalling the API to prevent rate limiting. */}
      {viewMode === "card" ? (
        <CardView articles={articles.slice(0, numArticles)} />
      ) : (
        <TableView articles={articles.slice(0, numArticles)} />
      )}
    </div>
  );
}
