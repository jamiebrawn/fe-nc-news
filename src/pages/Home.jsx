import { useEffect } from "react";
import ArticleList from "../components/ArticleList";

const Home = ({setArticleTopic}) => {

  useEffect(() => {
    setArticleTopic(null);
  });

  return (
    <div>
      <ArticleList />
    </div>
  );
};

export default Home;