import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getCommentsByArticleId,
  deleteCommentByCommentId,
  postCommentByArticleId,
} from "../utils/api";
import CommentsAdder from "./CommentsAdder";
import CommentsList from "./CommentsList";
import "../styles/CommentsContainer.css";

const CommentsContainer = ({ setCommentCount }) => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response);
        setErr(null);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErr(err);
        setIsLoading(false);
      });
  }, [article_id]);

  const handleAddComment = (newComment, user, body) => {
    setComments((currentComments) => [newComment, ...currentComments]);
    setCommentCount((currentCount) => currentCount + 1);

    return postCommentByArticleId(article_id, user, body)
      .then((postedComment) => {
        setComments((currentComments) =>
          currentComments.map((comment) =>
            comment === newComment
              ? { ...postedComment, author: user }
              : comment
          )
        );
      })
      .catch((err) => {
        setComments((currentComments) =>
          currentComments.filter((comment) => comment !== newComment)
        );
        setCommentCount((currentCount) => currentCount - 1);
        throw err;
      });
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== commentId)
    );
    setCommentCount((prevCount) => prevCount - 1);

    return deleteCommentByCommentId(commentId).catch((err) => {
      // If deletion fails, add the comment back
      getCommentsByArticleId(article_id)
        .then((response) => {
          setComments(response);
          setCommentCount(response.length);
        })
        .catch((fetchErr) => {
          console.error(
            "Failed to fetch comments after delete error:",
            fetchErr
          );
        });
      throw err;
    });
  };

  return (
    <div className="comments-container">
      <h2>Comments</h2>
      <CommentsAdder onAddComment={handleAddComment} />
      <CommentsList
        isLoading={isLoading}
        err={err}
        comments={comments}
        onDeleteComment={handleDeleteComment}
      />
    </div>
  );
};

export default CommentsContainer;
