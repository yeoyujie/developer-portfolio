"use client";

import { useState, useEffect } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export default async function ListOfStories() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  );
  const posts = await res.json();

  return (
    <div>
        {posts.articles.map((article:any) => (
            <p key={article.url}>{article.title}</p>
        ))}
    </div>
  );
}
