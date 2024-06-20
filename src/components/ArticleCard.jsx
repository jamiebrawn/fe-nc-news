import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ArticleCard.css";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const [isTopicHovered, setIsTopicHovered] = useState(false);

  const handleTopicMouseEnter = () => {
    setIsTopicHovered(true);
  };

  const handleTopicMouseLeave = () => {
    setIsTopicHovered(false);
  };

  const handleCardClick = () => {
    navigate(`/articles/${article.article_id}`);
  };

  const handleTopicClick = (event) => {
    event.stopPropagation();
    navigate(`/topics/${article.topic}`);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="article-card" onClick={handleCardClick}>
      <img
        className="article-card-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <h2
        className={`${
          isTopicHovered ? "topic-hovered" : "article-card-title"
        }`}
      >
        {article.title}
      </h2>
      <div className="article-card-ref">
        <p className="article-card-author" onClick={stopPropagation}>
          {article.author}
        </p>
        <p className="article-card-date">
          {new Date(article.created_at).toLocaleDateString()}
        </p>
      </div>
      <p
        className="article-card-topic"
        onClick={handleTopicClick}
        onMouseEnter={handleTopicMouseEnter}
        onMouseLeave={handleTopicMouseLeave}
      >
        {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
      </p>
      <div className="article-card-metrics">
        <p className="article-card-votes">{article.votes} votes</p>
        <p className="article-card-comment-count">
          {article.comment_count} comments
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
