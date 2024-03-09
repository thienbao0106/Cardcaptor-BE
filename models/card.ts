import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  updated_at: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Card", cardSchema);
