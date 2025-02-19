function CommentCard({ article, comment }) {
  return (
    <div key={article.article_id} className="comment">
      <img
        src="/src/assets/Portrait_Placeholder.png"
        className="user-profile-picture"
      ></img>
      <p>{comment.author}</p>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
    </div>
  );
}

export default CommentCard;
