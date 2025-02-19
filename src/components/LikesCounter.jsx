import { useState } from "react";
import { patchVoteCount } from "../utils/api";

const VotesCounter = ({ article }) => {
  const [votesCount, setVotesCount] = useState(article.votes);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  const handleVote = () => {
    setError(null);

    let inc_votes = hasVoted ? -1 : 1;

    setVotesCount((currentLikesCount) => currentLikesCount + inc_votes);
    setHasVoted(!hasVoted);

    patchVoteCount(article.article_id, inc_votes).catch((err) => {
      setVotesCount((currentLikesCount) => currentLikesCount - 1);
      setError("Your like was not successful. Please try again!");
    });
  };

  return (
    <div>
      <button onClick={handleVote}>
        {hasVoted === false ? <p>Upvote</p> : <p>Remove vote</p>}
      </button>
      {error ? <p>{error}</p> : null}
      <p>{votesCount}</p>
    </div>
  );
};

export default VotesCounter;
