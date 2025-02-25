import { useState } from "react";
import { postComment } from "../utils/api";
import { useUser } from "../contexts/Users";

export default function CommentForm({ article, setArticleComments }) {
  const [commentBody, setCommentBody] = useState("");
  const { user } = useUser();

  function handleSubmit(e) {
    e.preventDefault();

    const commentData = {
      body: commentBody,
      article_id: article.article_id,
      username: user.username,
    };

    postComment(commentData)
      .then((newComment) => {
        setCommentBody("");
        setArticleComments((currentComments) => [
          newComment,
          ...currentComments,
        ]);
      })
      .catch((err) => {
        console.error("Failed to post comment:", err);
      });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        <textarea
          name="postContent"
          className="comment-field"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="Add a comment"
          rows={4}
        />
      </label>
      <button className="pill-comment" type="submit">
        Post comment
      </button>
    </form>
  );
}
