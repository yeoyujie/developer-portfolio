"use client";

import { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

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
      <ButtonGroup variant="contained">
        <Button onClick={() => setViewMode("card")}>Card View</Button>
        <Button onClick={() => setViewMode("tab")}>Tab View</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained">
        <Button onClick={() => setNumArticles(5)}>5</Button>
        <Button onClick={() => setNumArticles(10)}>10</Button>
        <Button onClick={() => setNumArticles(25)}>25</Button>
      </ButtonGroup>
      {viewMode === "card" ? (
        <Grid container spacing={2}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.url}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {article.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
