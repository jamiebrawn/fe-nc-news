import { useNavigate } from "react-router-dom";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();


  const handleGoHome = () => {
    navigate("/articles");
  };

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong</h1>
      <button onClick={handleGoHome}>Go Home</button>
    </div>
  );
};

export default ErrorPage;