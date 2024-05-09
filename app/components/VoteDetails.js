import { getVotes } from "../lib/getVotes";

const VoteDetails = async () => {
  const { votes } = await getVotes();

  const bidenVote = votes[0].biden;

  const trumpVote = votes[0].trump;

  const totalVote = parseInt(bidenVote) + parseInt(trumpVote);

  return (
    <div className="text-center mb-5 mt-20">
      <h1>Total Votes: {totalVote} </h1>
      <h3>Total votes for Trump : {trumpVote}</h3>
      <h3>Total votes for Biden : {bidenVote} </h3>
    </div>
  );
};

export default VoteDetails;
