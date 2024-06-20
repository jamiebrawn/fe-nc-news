import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/api";
import CommentsAdder from "./CommentsAdder";
import CommentsList from "./CommentsList";
import '../styles/CommentsContainer.css'

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
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErr(err);
        setIsLoading(false);
      });
  }, [article_id]);

  return (
    <div className="comments-container">
    <h2>Comments</h2>
      <CommentsAdder setComments={setComments} setCommentCount={setCommentCount}/>
      <CommentsList isLoading={isLoading} err={err} comments={comments} setComments={setComments} setCommentCount={setCommentCount}/>
    </div>
  );
};

export default CommentsContainer;
