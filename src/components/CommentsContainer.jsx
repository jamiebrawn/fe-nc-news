import CommentsList from "./CommentsList";
import '../styles/CommentsContainer.css'

const CommentsContainer = () => {
  return (
    <div className="comments-container">
    <h2>Comments</h2>
      <CommentsList />
    </div>
  );
};

export default CommentsContainer;
