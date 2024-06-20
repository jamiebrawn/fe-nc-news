import CommentCard from "./CommentCard";

const CommentsList = ({comments, isLoading, err, setComments, setCommentCount}) => {
  

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (err) {
    return <h2>Sorry, something went wrong</h2>;
  }

  return (
    <>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} setCommentCount={setCommentCount}/>
      ))}
    </>
  );
};

export default CommentsList;
