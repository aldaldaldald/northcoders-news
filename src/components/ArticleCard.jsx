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

        <p>{shortDate}</p>
        <p>{article.topic}</p>
      </div>

      <p className="article-title">{article.title}</p>
      <img
        src={article.article_img_url === "" ? null : article.article_img_url}
        className="article-image"
      ></img>
      <div className="article-info">
        <p className="pill">Votes {article.votes}</p>
        <p className="pill">Comments {article.comment_count}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
