import {useState} from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import ErrorPage from "./pages/ErrorPage"
import "./App.css"

function App() {

  const [articleTopic, setArticleTopic] = useState(); 

  return (
    <>
      <Header articleTopic={articleTopic}/>
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/articles" />} />
          <Route path="/articles" element={<Home setArticleTopic={setArticleTopic}/>} />
          <Route path="/topics/:topic" element={<Home setArticleTopic={setArticleTopic}/>} />
          <Route path="/articles/:article_id" element={<ArticlePage setArticleTopic={setArticleTopic}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
