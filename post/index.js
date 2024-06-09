const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
require("./DB/connect");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4000", "http://localhost:3000"],
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Post-Service");
});

app.use("/post", require("./routes/PostControl"));

app.listen(PORT, () => {
  console.log("Running server on PORT ", PORT);
});
