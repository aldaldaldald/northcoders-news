import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../utils/api";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(article_id)
      .then((response) => {
        setArticle(response.article);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="single-article">
      <div key={article.article_id} className="article-card">
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
          src={article.article_img_url === "" ? null : article.article_img_url}
        ></img>
        <p>{article.body}</p>
        <button>Vote</button>
        <button>Add a comment</button>
        <button>Sort by</button>
        <p>Votes {article.votes}</p>
        <p>Comments {article.comment_count}</p>
        <br></br>
        <p>Comments section</p>
      </div>
    </section>
  );
}

export default Article;
