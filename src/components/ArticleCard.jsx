import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <img
        className="article-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <h2 className="article-title">{article.title}</h2>
      <div className="article-ref">
        <p className="article-author">{article.author}</p>
        <p className="article-date">
          {new Date(article.created_at).toLocaleDateString()}
        </p>
      </div>
        <p className="article-topic">
          {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
        </p>
      <div className="article-metrics">
        <p className="article-votes">{article.votes} votes</p>
        <p className="article-comments">{article.comment_count} comments</p>
      </div>
    </div>
  );
};

export default ArticleCard;
