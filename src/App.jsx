import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import "./App.css"

function App() {

  const [articleTopic, setArticleTopic] = useState(); 

  return (
    <>
      <Header articleTopic={articleTopic}/>
      <main className="content">
        <Routes>
          <Route path="/articles" element={<Home setArticleTopic={setArticleTopic}/>} />
          <Route path="/topics/:topic" element={<Home setArticleTopic={setArticleTopic}/>} />
          <Route path="/articles/:article_id" element={<ArticlePage setArticleTopic={setArticleTopic}/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
