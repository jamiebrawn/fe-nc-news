import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import './ArticleList.css'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
};

export default ArticleList;
