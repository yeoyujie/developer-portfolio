"use client";

import { useState, useEffect } from "react";

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

const ListOfStories = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setArticles(data.articles);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <p key={article.url}>{article.title}</p>
      ))}
    </div>
  );
};

export default ListOfStories;
