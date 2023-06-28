import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

interface Source {
  id: string;
  name: string;
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

interface CardViewProps {
  articles: Article[];
}

export function CardView({ articles }: CardViewProps) {
  return (
    <Grid container spacing={2}>
      {articles.map((article) => (
        <Grid item xs={12} sm={6} md={3} key={article.url}>
          <Link href={`news/${encodeURIComponent(article.url)}`}>
            <Card
              sx={{
                height: "100%",
                transition: "all 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  zIndex: 1,
                },
              }}
            >
              {article.urlToImage ? (
                <CardMedia
                  component="img"
                  height="300"
                  image={article.urlToImage}
                  alt={article.title}
                />
              ) : (
                <CardMedia
                  component="img"
                  height="300"
                  image="https://picsum.photos/200/300"
                  alt="Placeholder image"
                />
              )}
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: "Helvetica, sans-serif" }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: "Helvetica, sans-serif" }}
                >
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
