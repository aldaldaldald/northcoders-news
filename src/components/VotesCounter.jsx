import { useState } from "react";
import { patchVoteCount } from "../utils/api";

const VotesCounter = ({ article }) => {
  const [votesCount, setVotesCount] = useState(article.votes);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  const handleVote = () => {
    setError(null);

    let inc_votes = hasVoted ? -1 : 1;

    setVotesCount((currentVotesCount) => currentVotesCount + inc_votes);
    setHasVoted(!hasVoted);

    patchVoteCount(article.article_id, inc_votes).catch((err) => {
      setVotesCount((currentVotesCount) => currentVotesCount - 1);
      setError("Your vote was not successful. Please try again!");
    });
  };

  return (
    <div>
      <button className="pill-upvote" onClick={handleVote}>
        {!hasVoted ? <p>Upvote</p> : <p>Remove vote</p>}
      </button>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default VotesCounter;
