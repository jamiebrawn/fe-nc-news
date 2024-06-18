import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import "./ArticleDetails.css";

const ArticleDetails = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((response) => {
        response.topic =
          response.topic.charAt(0).toUpperCase() + response.topic.slice(1);
        setArticle((currentState) => ({ ...currentState, ...response }));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErr(err);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (err) {
    return <h2>Sorry, something went wrong</h2>;
  }

  return (
    <div className="article-details">
      <h2 className="article-details-topic">{article.topic}</h2>
      <h1 className="article-details-title">{article.title}</h1>
      <img
        className="article-details-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <p className="article-details-author">{article.author}</p>
      <p className="article-details-date">
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <div className="article-details-body">{article.body}</div>
      <p className="article-details-votes">{article.votes} Votes</p>
      <p className="article-details-comment-count">
        {article.comment_count} Comments
      </p>
    </div>
  );
};

export default ArticleDetails;
