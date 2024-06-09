const mongoose = require("mongoose");

mongoose
  .connect(process.env.mongodb_atlas_connection_string)
  .then(() => {
    console.log("connection sucessfully");
  })
  .catch((err) => console.log("connection faild : "));
