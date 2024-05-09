import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  total: {
    type: String,
  },
  trump: {
    type: String,
  },
  biden: {
    type: String,
  },
});

// Method to compare passwords

// Compile model from schema
const Vote = mongoose.models.Vote || mongoose.model("Vote", voteSchema);

export default Vote;
