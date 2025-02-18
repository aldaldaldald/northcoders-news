import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../api/ApiCalls";

function ArticleCard({ topic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(topic);
    setIsLoading(true);
    fetchArticles(topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        //  handle the error from the API
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <div className="article-card-list">
      {articles.map((article) => (
        <div key={article.article_id} className="article-card">
          <Link to={`/articles/${article.article_id}`}>
            <div>
              <img
                src="/src/assets/Portrait_Placeholder.png"
                className="user-profile-picture"
              ></img>
              <p>{article.author}</p>
              <p>Created at {article.created_at}</p>
            </div>
            <p>{article.title}</p>
            <img
              src={
                article.article_img_url === "" ? null : article.article_img_url
              }
            ></img>
            <p>Votes {article.votes}</p>
            <p>Comments {article.comment_count}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticleCard;
