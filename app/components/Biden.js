import { revalidateTag } from "next/cache";
import Image from "next/image";
import biden from "../../public/biden.jpg";
import dbConnect from "../connect/mongodb";
import Votes from "../modals/Votes";
import BidenVoteButton from "./BidenVoteButton";

const Biden = async () => {
  const addBidenVote = async (formData) => {
    "use server";
    await dbConnect();

    // Find an existing vote record or create a new one
    let existingVote = await Votes.findOne();

    if (existingVote) {
      // Convert Biden's existing vote count to a number, increment by 1, then convert back to a string
      const bidenVotes = parseInt(existingVote.biden || "0", 10) + 1;
      existingVote.biden = bidenVotes.toString();

      // Save the updated document back to the database
      await existingVote.save();
      revalidateTag("votes");
    } else {
      // If no existing record is found, create a new one with the initial counts
      const newVote = await Votes.create({
        biden: "1",
        trump: "0",
      });
    }
  };

  return (
    <form action={addBidenVote}>
      <div className="w-[130px] sm:w-auto aspect-w-10 aspect-h-12 relative mx-auto ">
        <Image className="object-cover rounded-md " src={biden} alt="biden" />
      </div>
      <BidenVoteButton />
    </form>
  );
};

export default Biden;
