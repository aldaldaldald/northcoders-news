import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../utils/api";
import VotesCounter from "../components/VotesCounter";
import Comments from "../components/Comments";
import { useUser } from "../contexts/Users";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { users = [] } = useUser();

  useEffect(() => {
    setIsLoading(true);

    fetchSingleArticle(article_id)
      .then((response) => {
        setArticle(response.article);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setArticle(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (!article) {
    return <p className="error">Failed to load article.</p>;
  }

  const articleAuthor = users.find((user) => user.username === article.author);
  const shortDate = article.created_at?.slice(0, 10);

  return (
    <section className="single-article">
      <div key={article.article_id} className="article-card">
        <div className="user-card-top-header">
          <img
            src={
              articleAuthor?.avatar_url ||
              "/src/assets/Portrait_Placeholder.png"
            }
            className="user-profile-picture"
            alt="Author"
          />
          <p>{article.author}</p>
          <p>Created at {shortDate}</p>
        </div>
        <h2>{article.title}</h2>
        {article.article_img_url && (
          <img
            src={article.article_img_url}
            className="article-image"
            alt="Article"
          />
        )}
        <p className="body">{article.body}</p>
        <VotesCounter article={article} />
        <div className="article-info-creator">
          <p>{article.votes} votes</p>
          <p>·</p>
          <p>{article.comment_count} comments</p>
        </div>
        <Comments article={article} />
      </div>
    </section>
  );
}

export default Article;
