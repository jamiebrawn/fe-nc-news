import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentsList = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response);
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
    <>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </>
  );
};

export default CommentsList;
