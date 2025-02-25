import { useUser } from "../contexts/Users";

function ArticleCard({ article }) {
  const { users } = useUser();

  const articleAuthor = users.find((user) => user.username === article.author);

  const shortDate = article.created_at.slice(0, 10);

  return (
    <div key={article.article_id} className="article-card">
      <div className="article-creator">
        {/* <img
          src={
            articleAuthor
              ? articleAuthor.avatar_url
              : "/src/assets/Portrait_Placeholder.png"
          }
          className="user-profile-picture"
        ></img> */}
        <p>{article.author}</p>
        <p>·</p>
        <p>{shortDate}</p>
        <p>·</p>
        <p>{article.topic}</p>
      </div>

      <h2>{article.title}</h2>
      <img
        src={article.article_img_url === "" ? null : article.article_img_url}
        className="article-image"
      ></img>
      <div className="article-info">
        <p>{article.votes} votes</p>
        <p>·</p>
        <p>{article.comment_count} comments</p>
      </div>
    </div>
  );
}

export default ArticleCard;
