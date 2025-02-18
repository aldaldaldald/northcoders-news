import "./App.css";
import NavigationBar from "./components/NavBar";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
