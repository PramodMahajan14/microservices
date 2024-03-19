const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    ref: "User",
    required: true,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    // required: true,
  },
  tags: [{ type: String }],
});

// Define the Post model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
