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
                <TableCell sx={{ borderBottom: 'none' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      bgcolor: 'background.paper',
                      p: 2,
                      borderRadius: 1.5,
                    }}
                  >
                    {article.urlToImage ? (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        width="500"
                        style={{ marginRight: '16px' }}
                      />
                    ) : (
                      <img
                        src="https://picsum.photos/1920/1080"
                        alt="Placeholder image"
                        width="500"
                        style={{ marginRight: '16px' }}
                      />
                    )}
                    <Box>
                      <Typography variant="h4" component="div">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{fontSize: "1.6em"}}>
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