const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://pramod:micro@task.kwqc9r0.mongodb.net/?retryWrites=true&w=majority&appName=Task",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connection sucessfully");
  })
  .catch((err) => console.log("connection faild : "));
