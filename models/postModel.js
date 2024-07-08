import mongoose, { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel = models.Post || model("Post", postSchema);

export default PostModel;
