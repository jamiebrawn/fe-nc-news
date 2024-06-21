import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTopics } from "../utils/api";
import "../styles/TopicsNav.css";

const TopicsNav = ({ articleTopic }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((response) => {
        setTopics(response);
        setErr(null);
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
      <NavLink
        
        end to="/articles"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Home
      </NavLink>
      {topics.map((topic) => (
        <NavLink
          key={topic.slug}
          to={`/topics/${topic.slug}`}
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""} ${
              topic.slug === articleTopic ? "topic-active" : ""
            }`
          }
        >
          {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
        </NavLink>
      ))}
    </nav>
  );
};

export default TopicsNav;
