import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import ArticleSorter from "../components/ArticleSorter";
import "../styles/Home.css"

const Home = ({ setArticleTopic }) => {

  const { topic } = useParams();
  const [sortBy, setSortBy] = useState('date');
  const [order, setOrder] = useState('desc');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setArticleTopic(null);
  });

  useEffect(() => {
    setSortBy(searchParams.get('sort_by') || 'date');
    setOrder(searchParams.get('order') || 'desc');
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ sort_by: sortBy, order: order });
  }, [sortBy, order, setSearchParams]);

  let arrangementTitle = "";
  if (sortBy === "date") {
    if (order === "desc") {
      arrangementTitle = "Latest";
    } else {
      arrangementTitle = "Oldest";
    }
  }
  if (sortBy === "comment_count") {
    if (order === "desc") {
      arrangementTitle = "Most Discussed";
    } else {
      arrangementTitle = "Least Discussed";
    }
  }
  if (sortBy === "votes") {
    if (order === "desc") {
      arrangementTitle = "Most Liked";
    } else {
      arrangementTitle = "Least Liked";
    }
  }

  return (
    <>
      <h1 className="home-articles-title">
        {topic ? topic.charAt(0).toUpperCase() + topic.slice(1) : "Home"}:{" "}
        {arrangementTitle}
      </h1>
      <ArticleSorter
        sortBy={sortBy}
        order={order}
        setSortBy={setSortBy}
        setOrder={setOrder}
      />
      <ArticleList sortBy={sortBy} order={order}/>
    </>
  );
};

export default Home;