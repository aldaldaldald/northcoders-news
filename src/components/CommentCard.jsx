import { useUser } from "../contexts/Users";
import { deleteComment } from "../utils/api";

function CommentCard({ article, comment, setArticleComments }) {
  const { user, users } = useUser();

  const shortDate = comment.created_at.slice(0, 10);
  const commentAuthor = users.find((user) => user.username === comment.author);

  const handleDelete = () => {
    deleteComment(comment.comment_id)
      .then(() => {
        setArticleComments((previousComments) =>
          previousComments.filter(
            (prevComment) => prevComment.comment_id !== comment.comment_id
          )
        );
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };

  return (
    <div key={article.article_id} className="comment">
      <div className="user-card-top">
        <img
          src={
            commentAuthor
              ? commentAuthor.avatar_url
              : "/src/assets/Portrait_Placeholder.png"
          }
          className="user-profile-picture"
        ></img>
        <p>{comment.author}</p>
        <p>{shortDate}</p>
      </div>
      <p className="body">{comment.body}</p>
      <p className="body">{comment.votes} votes</p>
      {comment.author === user.username ? (
        <button className="button-delete" onClick={handleDelete}>
          Delete
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CommentCard;
