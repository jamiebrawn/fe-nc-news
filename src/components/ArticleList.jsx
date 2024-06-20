import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import "../styles/ArticleList.css";

const ArticleList = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErr("Failed to load articles. Please try again later.");
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <>
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
