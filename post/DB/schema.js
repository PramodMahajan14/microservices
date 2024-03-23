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
    default: "65f2d50969627502866b8b03",
    // required: true,
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
  Image: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcULRb2mBzuO_G146oOgWqemUIu-vr_kg3kg&usqp=CAU",
  },
});

// Define the Post model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
