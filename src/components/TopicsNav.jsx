import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const TopicsNav = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((response) => {
        setTopics(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErr(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading topics...</p>;
  }

  if (err) {
    return <p>Failed to load topics</p>;
  }

  return (
    <nav className="topics-nav">
      <Link to="/">Home</Link>
      {topics.map((topic) => (
        <Link key={topic.slug} to={`/articles/${topic.slug}`}>
          {topic.slug}
        </Link>
      ))}
    </nav>
  );
};

export default TopicsNav;
