// pages/api/news.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch top headlines from News API
  const newsRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const NewsApiResponse = await newsRes.json();
  res.status(200).json(NewsApiResponse.articles);
}
