"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";

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
      <Box display="flex" justifyContent="space-between">
        <ButtonGroup variant="contained">
          <Button
            onClick={() => setViewMode('card')}
            color={viewMode === 'card' ? 'primary' : 'inherit'}
          >
            Card View
          </Button>
          <Button
            onClick={() => setViewMode('tab')}
            color={viewMode === 'tab' ? 'primary' : 'inherit'}
          >
            Tab View
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="contained">
          <Button
            onClick={() => setNumArticles(5)}
            color={numArticles === 5 ? 'primary' : 'inherit'}
          >
            5
          </Button>
          <Button
            onClick={() => setNumArticles(10)}
            color={numArticles === 10 ? 'primary' : 'inherit'}
          >
            10
          </Button>
          <Button
            onClick={() => setNumArticles(25)}
            color={numArticles === 25 ? 'primary' : 'inherit'}
          >
            25
          </Button>
        </ButtonGroup>
      </Box>
      {viewMode === 'card' ? (
        <Grid container spacing={2}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.url}>
              <Link href={`/article/${encodeURIComponent(article.url)}`}>
                  <Card>
                    {article.urlToImage && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={article.urlToImage}
                        alt={article.title}
                      />
                    )}
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {article.description}
                      </Typography>
                    </CardContent>
                  </Card>
              </Link>
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