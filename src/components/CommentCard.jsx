import { useUser } from "../contexts/Users";
import { deleteComment } from "../utils/api";

function CommentCard({ article, comment, setArticleComments }) {
  const { user, users } = useUser();

  const commentAuthor = users.find((user) => user.username === comment.author);

  const handleDelete = () => {
    deleteComment(comment.comment_id)
      .then(() => {
        setArticleComments((previousComments) =>
          previousComments.filter(
            (comment) => comment.comment_id !== comment.comment_id
          )
        );
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <div key={article.article_id} className="comment">
      <img
        src={
          commentAuthor
            ? commentAuthor.avatar_url
            : "/src/assets/Portrait_Placeholder.png"
        }
        className="user-profile-picture"
      ></img>
      <p>{comment.author}</p>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
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
