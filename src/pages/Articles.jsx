import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { fetchArticles } from "../utils/api";
import { useSearchParams, Link } from "react-router-dom";
import ArticleFilters from "../components/ArticleFilters.jsx";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("newest");

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

        const sortedArticles = [...filteredArticles].sort((a, b) => {
          switch (sortBy) {
            case "newest":
              return new Date(b.created_at) - new Date(a.created_at);
            case "oldest":
              return new Date(a.created_at) - new Date(b.created_at);
            case "most-votes":
              return Number(b.votes) - Number(a.votes);
            case "least-votes":
              return Number(a.votes) - Number(b.votes);
            case "most-commented":
              return b.comment_count - a.comment_count;
            case "least-commented":
              return a.comment_count - b.comment_count;
            default:
              return 0;
          }
        });

        setArticles(sortedArticles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams, sortBy]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (articles.length === 0) {
    return (
      <p className="loading">
        Please refresh a few times to wake up the server.
      </p>
    );
  }

  function handleTopicChange(event) {
    const selectedTopic = event.target.value;
    setSearchParams({ topic: selectedTopic });
  }

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <section className="articles">
      <h1>Articles</h1>
      <ArticleFilters
        handleTopicChange={handleTopicChange}
        handleSortByChange={handleSortByChange}
        currentTopic={searchParams.get("topic") || "all-topics"}
        currentSortBy={sortBy}
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
