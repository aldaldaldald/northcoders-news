import { useState, useEffect } from "react";
import { fetchArticleComments } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function Comments({ article }) {
  const [comments, setArticleComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleComments(article.article_id)
      .then((response) => {
        setArticleComments(response.comments);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <section>
      <CommentForm article={article} setArticleComments={setArticleComments} />
      <section className="comment-list">
        {comments.map((comment) => (
          <CommentCard
            article={article}
            comment={comment}
            key={comment.comment_id}
            setArticleComments={setArticleComments}
          />
        ))}
      </section>
    </section>
  );
}
