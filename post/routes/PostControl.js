const route = require("express").Router();
const Post = require("../DB/schema");
const { v4: uuidv4 } = require("uuid");

route.post("/newpost", async (req, res) => {
  const { title, content, author } = req.body;
  console.log(req.body);

  // if (!title || !author || !) {
  //   return res.status(400).json({ msg: "Please All filed are required" });
  // }
  const bookId = uuidv4(); //used for generation og userId

  let newPost = new Post({
    title,
    content,
    author: bookId,
  });

  await newPost.save();

  return res.status(200).json({ msg: "Post Added successfully" });
});

route.get("/posts", (req, res) => {
  res.send("hii hoo");
});

module.exports = route;
