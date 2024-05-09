import dbConnect from "../connect/mongodb";
import Votes from "../modals/Votes";

export const getVotes = async () => {
  await dbConnect();
  const vote = await Votes.find({});
  return vote;
};
