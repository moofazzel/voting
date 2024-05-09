import { revalidateTag } from "next/cache";
import Image from "next/image";
import trump from "../../public/trump.png";
import dbConnect from "../connect/mongodb";
import Votes from "../modals/Votes";
import TrumpVoteButton from "./TrumpVoteButton";

const Trump = async () => {
  const addTrumpVote = async (formData) => {
    "use server";
    await dbConnect();

    // Find an existing vote record or create a new one
    let existingVote = await Votes.findOne();

    if (existingVote) {
      // Convert Biden's existing vote count to a number, increment by 1, then convert back to a string
      const trumpVotes = parseInt(existingVote.trump || "0", 10) + 1;
      existingVote.trump = trumpVotes.toString();

      // Save the updated document back to the database
      await existingVote.save();
      revalidateTag("votes");
    } else {
      // If no existing record is found, create a new one with the initial counts
      const newVote = await Votes.create({
        biden: "0",
        trump: "1",
      });
    }
  };

  const voted = true;

  return (
    <form action={addTrumpVote}>
      <input
        className="sr-only"
        type="text"
        name="trump-vote"
        value={"John Doe"}
        readOnly
      />
      <div className=" aspect-w-10 aspect-h-12 w-[130px] sm:w-auto relative mx-auto">
        <Image
          fill
          className="object-cover rounded-md"
          src={trump}
          alt="trump"
        />
      </div>
      <TrumpVoteButton />
    </form>
  );
};

export default Trump;
