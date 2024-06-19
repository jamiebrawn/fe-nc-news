import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { useParams } from "react-router-dom";
import { getArticleById, patchArticleVotes } from "../utils/api";
import "../styles/ArticleDetails.css";

const ArticleDetails = () => {
  const { article_id } = useParams();
  const { userVotes, updateUserVotes } = useContext(UserContext);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [voteChange, setVoteChange] = useState(0);
  const [voteErr, setVoteErr] = useState(null);
  const userVoted = userVotes[article_id] || 0;

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
        setErr("Failed to load article.");
        setIsLoading(false);
      });
  }, [article_id]);

  const handleVote = (increment) => {
    if (userVoted === increment) {
      setVoteErr("You have already voted.");
      return;
    }

    setVoteChange((currentCount) => {
      return currentCount + increment;
    });
    setVoteErr(null);
    patchArticleVotes(article_id, increment)
      .then(() => {
        updateUserVotes(article_id, increment);
      })
      .catch((err) => {
        setVoteChange((currentCount) => {
          return currentCount - increment;
        });
        setVoteErr("Failed to load articles. Please try again later.");
        console.error(err);
      });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (err) {
    return <h2>{err}</h2>;
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
      <div className="article-details-votes">
        <button onClick={() => handleVote(1)} disabled={userVoted === 1}>
          Upvote
        </button>
        <button onClick={() => handleVote(-1)} disabled={userVoted === -1}>
          Downvote
        </button>
        <p>Votes: {article.votes + voteChange}</p>
        {voteErr ? (
          <p className="article-details-error-message">{voteErr}</p>
        ) : null}
      </div>
      <p className="article-details-comment-count">
        {article.comment_count} Comments
      </p>
    </div>
  );
};

export default ArticleDetails;

{
  /* {isLoading ? <h2>Loading...</h2> : null}
      {err ? (
        <>
          <h2>{err}</h2>
        </>
      ) : null} */
}
