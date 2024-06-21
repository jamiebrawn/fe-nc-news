import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import TopicsNav from "./TopicsNav";
import "../styles/Header.css";

const Header = ({articleTopic}) => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-app-name">
          <Link to="/articles">NC News</Link>
        </div>
        <div className="header-user">
          Hello, <span className="header-user-username">{user}</span>
        </div>
      </div>
      <TopicsNav articleTopic={articleTopic}/>
    </header>
  );
};

export default Header;
