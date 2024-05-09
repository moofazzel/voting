import { getVotes } from "../lib/getVotes";

const VoteDetails = async () => {
  const { votes } = await getVotes();

  const bidenVote = votes[0]?.biden;

  const trumpVote = votes[0]?.trump;

  const totalVote = parseInt(bidenVote) + parseInt(trumpVote);

  return (
    <div className="text-center mb-5 pt-20 ">
      <div className="bg-white max-w-[650px] mx-auto px-5 py-6 rounded-md">
        <h1 className="text-3xl font-bold mb-3">
          Total Votes: {totalVote || 0}{" "}
        </h1>
        <h3 className="text-xl">Total votes for Trump : {trumpVote || 0}</h3>
        <h3 className="text-xl ">Total votes for Biden : {bidenVote || 0} </h3>
      </div>
    </div>
  );
};

export default VoteDetails;
