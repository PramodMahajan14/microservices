const express = require("express");

const PORT = process.env.PORT || 4000;
const app = express();
require("./DB/connect");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:4000",
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hiii");
});

app.use("/post", require("./routes/PostControl"));

app.listen(PORT, () => {
  console.log("Running server on PORT ", PORT);
});
