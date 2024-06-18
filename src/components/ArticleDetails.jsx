import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../services/api";
import "./ArticleDetail.css";

const ArticleDetail = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErr(err);
        setIsLoading(false);
      });
  }, [article_id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-detail">
      <img
        className="article-detail-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <h1 className="article-detail-title">{article.title}</h1>
      <p className="article-detail-author">by {article.author}</p>
      <p className="article-detail-date">
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <div className="article-detail-body">{article.body}</div>
      <p className="article-detail-votes">Votes: {article.votes}</p>
      <p className="article-detail-comments">
        Comments: {article.comment_count}
      </p>
    </div>
  );
};

export default ArticleDetail;
