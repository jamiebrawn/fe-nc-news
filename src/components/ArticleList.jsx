import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "../styles/ArticleList.css";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErr("Failed to load articles. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Articles</h1>
      {isLoading ? <h2>Loading...</h2> : null}
      {err ? (
        <>
          <h2>{err}</h2>
        </>
      ) : null}
      <section className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </>
  );
};

export default ArticleList;
