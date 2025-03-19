import mongoose, { Schema } from "mongoose";

//Agent schema
const agentSchema = new Schema(
  {
    name: String,
    age: { type: Number, min: 18, max: 130 },
  },
  {
    collection: "agentes", // To enforce name of the collection wich was writteng in spanish
  }
);

//Create model
const Agent = mongoose.model("Agent", agentSchema);

export default Agent;
