const mongoose = require("mongoose");

const postCommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },

  postId: {
    type: String,

    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

const PostComment = mongoose.model("PostComment", postCommentSchema);

module.exports = PostComment;
