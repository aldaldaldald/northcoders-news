import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { fetchArticles } from "../utils/api";
import { useSearchParams, Link } from "react-router-dom";
import ArticleFilters from "../components/ArticleFilters.jsx";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const topicFromQuery = searchParams.get("topic") || "all-topics";

    setIsLoading(true);
    fetchArticles()
      .then((fetchedArticles) => {
        const filteredArticles =
          topicFromQuery === "all-topics"
            ? fetchedArticles
            : fetchedArticles.filter(
                (article) => article.topic === topicFromQuery
              );
        setArticles(filteredArticles || []);
      })
      .catch((error) => {
        // handle errors
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  function handleTopicChange(event) {
    const selectedTopic = event.target.value;
    setSearchParams({ topic: selectedTopic });
  }

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section className="articles">
      <h1>Articles</h1>
      <ArticleFilters
        handleTopicChange={handleTopicChange}
        handleSortByChange={handleSortByChange}
        currentTopic={searchParams.get("topic") || "all-topics"}
      />
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
