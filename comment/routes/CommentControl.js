const route = require("express").Router();
const PostComment = require("../DB/schema");
const { v4: uuidv4 } = require("uuid");

route.post("/com/:id", async (req, res) => {
  try {
    const post = req.params.id;
    console.log(post, req.body.content);

    let newComment = new PostComment({
      content: req.body.content,

      postId: post,
    });

    await newComment.save();

    return res.status(200).json({ msg: "Post comment successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

route.get("/coms/:id", async (req, res) => {
  try {
    const post = req.params.id;
    console.log(post);
    let comments = await PostComment.find({ postId: post });
    console.log(comments);
    if (!comments) {
      return res.status(200).json("No Comment");
    }
    return res.status(200).json(comments);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = route;
