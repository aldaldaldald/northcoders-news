import "./App.css";
import NavigationBar from "./components/NavBar";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import UserProfile from "./pages/UserProfile";
import { useUser } from "./contexts/Users";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  const { user } = useUser();

  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/" element={<Articles />} />
        {user && (
          <Route path={`/users/${user.username}`} element={<UserProfile />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
