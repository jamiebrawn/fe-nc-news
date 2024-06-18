import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <div className="comment-card-ref">
        <p className="comment-card-author">{comment.author}</p>
        <p className="comment-card-date">
          {new Date(comment.created_at).toLocaleDateString()}
        </p>
      </div>
      <p className="comment-card-body">{comment.body}</p>
      <p className="comment-card-votes">{comment.votes} votes</p>
    </div>
  );
};

export default CommentCard;
