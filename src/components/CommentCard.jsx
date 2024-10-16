import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import "../styles/CommentCard.css";

const CommentCard = ({ comment, onDeleteComment }) => {
  const { user } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteErr, setDeleteErr] = useState(null);

  const handleDelete = () => {
    setIsDeleting(true);
    setDeleteErr(null);
    onDeleteComment(comment.comment_id)
      .then(() => {
        setIsDeleting(false);
      })
      .catch((err) => {
        setDeleteErr("Failed to delete comment. Please try again later.");
        console.error(err);
        setIsDeleting(false);
      });
  };

  return (
    <div className="comment-card">
      <div className="comment-card-ref">
        <p className="comment-card-author">{comment.author}</p>
        <p className="comment-card-date">
          {new Date(comment.created_at).toLocaleDateString()}
        </p>
      </div>
      <p className="comment-card-body">{comment.body}</p>
      <div className="comment-card-footer">
        <p className="comment-card-votes">{comment.votes} votes</p>
        {user === comment.author ? (
          <button onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        ) : null}
        {deleteErr ? <p className="error-message">{deleteErr}</p> : null}
      </div>
    </div>
  );
};

export default CommentCard;
