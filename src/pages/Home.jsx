import ArticleList from "../components/ArticleList";

const Home = ({setArticle}) => {

  return (
    <div>
      <ArticleList setArticle={setArticle}/>
    </div>
  );
};

export default Home;
