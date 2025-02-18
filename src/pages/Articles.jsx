import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { fetchArticles } from "../utils/api";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic, sortBy]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section className="articles">
      <h1>Articles</h1>

      <select onChange={handleSortByChange}>
        <option value="New">New</option>
        <option value="Most votes">Most votes</option>
        <option value="Most commented">Most commented</option>
      </select>

      <br></br>

      <select onChange={handleTopicChange}>
        <option value="all-items">All topics</option>
        <option value="football">Football</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
      </select>

      <section className="article-list">
        {articles.map((article) => (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <ArticleCard article={article} />
          </Link>
        ))}
      </section>
    </section>
  );
}

export default Articles;
