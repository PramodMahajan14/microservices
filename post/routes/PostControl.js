const route = require("express").Router();
const Post = require("../DB/schema");
const { v4: uuidv4 } = require("uuid");

route.post("/newpost", async (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);

  // if (!title || !author || !) {
  //   return res.status(400).json({ msg: "Please All filed are required" });
  // }
  const pId = uuidv4(); //used for generation og userId

  let newPost = new Post({
    title,
    content,
    postId: pId,
    author: "pramod",
  });

  await newPost.save();

  return res.status(200).json({ msg: "Post Added successfully" });
});

route.get("/like/:Id", async (req, res) => {
  try {
    await Post.findOneAndUpdate(
      { postId: req.params.Id },
      { $inc: { likes: 1 } }
    );
    return res.status(200).json("Liked!");
  } catch (err) {
    return res.status(500).json({ msg: `Error liking post:, ${err}` });
  }
});
route.get("/posts", async (req, res) => {
  try {
    let posts = await Post.find();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = route;
