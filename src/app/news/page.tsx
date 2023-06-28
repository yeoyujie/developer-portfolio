"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ViewControls } from "@/components/ViewControls";
import { CardView } from "@/components/CardView";

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
  const [viewMode, setViewMode] = useState<ViewMode>("card");
  const [numArticles, setNumArticles] = useState(5);

  // Fetch top headlines from News API
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      const NewsApiResponse = await res.json();
      setArticles(NewsApiResponse.articles);
    };
    fetchArticles();
  }, []);

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
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.url}>
                  <TableCell>{article.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
