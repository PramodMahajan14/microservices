const express = require("express");
require("dotenv").config("../post/.env");
const PORT = process.env.PORT || 4001;
const app = express();
require("./DB/connect");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4001", "http://localhost:3000"],
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Comment-Service");
});

app.use("/comment", require("./routes/CommentControl"));

app.listen(PORT, () => {
  console.log("Running server on PORT ", PORT);
});
