import { useState } from "react";
import { postComment } from "../utils/api";

export default function CommentForm({ article, setArticleComments }) {
  const [commentBody, setCommentBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const commentData = {
      body: commentBody,
      article_id: article.article_id,
      username: "cooljmessy",
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
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="Add a comment"
          rows={4}
          cols={48}
        />
      </label>
      <button type="submit">Post comment</button>
    </form>
  );
}
