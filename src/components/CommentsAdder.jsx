import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { postCommentByArticleId } from "../utils/api";
import "../styles/CommentAdder.css";

const CommentAdder = ({ setComments, setCommentCount }) => {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErr(null);
    setSuccessMessage("");

    const newComment = {
      body,
      author: user,
      article_id,
      votes: 0,
      created_at: new Date().toISOString(),
    };
    setComments((currentComments) => [newComment, ...currentComments]);

    postCommentByArticleId(article_id, user, body)
      .then(() => {
        setSuccessMessage("Comment posted.");
        setBody("");
        setCommentCount((currentCount) => currentCount + 1);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("Failed to add comment. Please try again later.");
        setComments((currentComments) => {
          return currentComments.filter((comment) => comment !== newComment);
        });
        // setCommentCount((currentCount) => currentCount - 1);
        console.error(err);
        setIsLoading(false);
      });
  };

  const handleCancel = () => {
    setBody("");
    setErr(null);
    setSuccessMessage("");
  };

  return (
    <div className="comment-adder">
      <form onSubmit={handleSubmit}>
        <label htmlFor="body_textarea">
          Add a Comment
          <textarea
            id="body_textarea"
            name="body"
            value={body}
            onChange={handleBodyChange}
            placeholder="Write here..."
            required
          />
        </label>
        {err ? <p className="error-message">{err}</p> : null}
        <div className="buttons">
          <button type="cancel" onClick={handleCancel} disabled={isLoading}>
            Cancel
          </button>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Posting..." : "Post Comment"}
          </button>
        </div>
      </form>
      {successMessage ? (
        <p className="success-message">{successMessage}</p>
      ) : null}
    </div>
  );
};

export default CommentAdder;
