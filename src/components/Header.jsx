import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import TopicsNav from "./TopicsNav";
import "../styles/Header.css";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <div className="navbar-app-name">
        <Link to="/">NC News</Link>
      </div>
      <div className="navbar-user">
        Hello, <span className="navbar-user-username">{user}</span>
      </div>
      <TopicsNav />
    </header>
  );
};

export default Header;
