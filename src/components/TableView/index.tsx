import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
} from "@mui/material";

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

interface TableViewProps {
  articles: Article[];
}

export function TableView({ articles }: TableViewProps) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.url}>
              <TableCell
                sx={{
                  borderBottom: "none",
                  height: "100%",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    bgcolor: "background.paper",
                    p: 2,
                    borderRadius: 1.5,
                  }}
                >
                  {/* Unable to use Next Image as the image source comes from multiple domains */}
                  {article.urlToImage ? (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      width="300"
                      height="200"
                      style={{ marginRight: "16px", objectFit: "cover" }} 
                    />
                  ) : (
                    <img
                      src="https://picsum.photos/1920/1080"
                      alt="Placeholder image"
                      width="300"
                      height="200"
                      style={{ marginRight: "16px", objectFit: "cover" }} 
                    />
                  )}
                  <Box>
                    <Typography variant="h4" component="div">
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "1.6em" }}
                    >
                      {article.description}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
