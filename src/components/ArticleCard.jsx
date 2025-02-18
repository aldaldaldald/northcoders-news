function ArticleCard({ article }) {
  return (
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
      <p>Votes {article.votes}</p>
      <p>Comments {article.comment_count}</p>
    </div>
  );
}

export default ArticleCard;
