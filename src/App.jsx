import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/:topic" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
