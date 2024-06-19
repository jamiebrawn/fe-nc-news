import { useState } from "react";
import ArticleDetails from "../components/ArticleDetails";
import CommentsContainer from "../components/CommentsContainer";

const ArticlePage = () => {
  const [commentCount, setCommentCount] = useState(0);

  return (
    <>
      <ArticleDetails commentCount={commentCount} />
      <CommentsContainer setCommentCount={setCommentCount} />
    </>
  );
};

export default ArticlePage;
