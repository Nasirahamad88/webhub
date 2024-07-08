import connectDB from "@/config/database";
import PostModel from "@/models/postModel";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const { name, model, img } = req.body;
      const post = new PostModel({ name, model, img });
      await post.save();
      res.status(201).json({ success: true, data: post });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
