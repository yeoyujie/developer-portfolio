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
  const [numArticles, setNumArticles] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const storedNumArticles = localStorage.getItem("numArticles");
      return storedNumArticles ? parseInt(storedNumArticles) : 25;
    } else {
      return 25;
    }
  });

  useEffect(() => {
    const fetchArticles = async () => {
      // Fetch top headlines from our API route
      const res = await fetch("/api/news");
      const articles = await res.json();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  // Save viewMode to localStorage
  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
    localStorage.setItem("numArticles", numArticles.toString());
  }, [viewMode, numArticles]);

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
