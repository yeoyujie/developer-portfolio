"use client";

import { useState, useEffect } from "react";

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEXT_PUBLIC_NEWS_API_KEY);

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const ListOfStories = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await newsapi.v2.topHeadlines({
        country: "us",
      });
      setArticles(response.articles);
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

// const getArticles = async () => {
//  const res = await()
//  return res.json();
// }

// export default async function ListOfStories() {
//     const posts = await getArticles();

//     return (
//         <div>
//             {posts.map((post:any) => {
//                 return <p>{post.title}</p>
//             })}
//         </div>
//     )
// }

// interface Article {
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string;
// }

// export default function NewsPage() {
//   const [articles, setArticles] = useState<Article[]>([]);

//   newsapi.v2.topHeadlines({
//     country: 'us'
//   }).then((response: any) => {
//     console.log(response);

//   });

//   const fetchArticles = async () => {
//     try {
//       const response = await newsapi.v2.topHeadlines({
//         country: "us",
//       });
//       setArticles(response.articles);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       {articles.map((article) => (
//         <div key={article.url} style={{ display: "flex", margin: "1rem" }}>
//           <img src={article.urlToImage} alt={article.title} width={200} />
//           <div style={{ marginLeft: "1rem" }}>
//             <h2>{article.title}</h2>
//             <p>{article.description}</p>
//             <a href={article.url}>Read more</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
