'use client'
import { Box, Typography } from "@mui/material";
// @ts-ignore
import { useNavigation } from "next/navigation";


interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export default function ArticlePage() {
  const { params } = useNavigation();
  const { article } = params;

  // Use the article parameter to fetch and display the article data

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        By {article.author}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Published on {new Date(article.publishedAt).toLocaleDateString()}
      </Typography>
      <Box sx={{ my: 2 }}>
        <img src={article.urlToImage} alt={article.title} width="100%" />
      </Box>
      <Typography variant="body1" gutterBottom>
        {article.description}
      </Typography>
      <Typography variant="body2">{article.content}</Typography>
    </Box>
  );
}

// export default function ArticlePage({ params: { article } }: { params: { article: Article } }) {

//   const router = useRouter();
//   const { article: articleURL } = router.query;
//   const [article, setArticle] = useState<Article | null>(null);

//   useEffect(() => {
//     // Fetch the article data using the articleURL
//     // and update the state using setArticle
//   }, [articleURL]);

//   return (
//     <Box>
//       <Typography variant="h4" component="h1" gutterBottom>
//         {article.title}
//       </Typography>
//       <Typography variant="subtitle1" gutterBottom>
//         By {article.author}
//       </Typography>
//       <Typography variant="subtitle2" gutterBottom>
//         Published on {new Date(article.publishedAt).toLocaleDateString()}
//       </Typography>
//       <Box sx={{ my: 2 }}>
//         <img src={article.urlToImage} alt={article.title} width="100%" />
//       </Box>
//       <Typography variant="body1" gutterBottom>
//         {article.description}
//       </Typography>
//       <Typography variant="body2">{article.content}</Typography>
//     </Box>
//   );
// }