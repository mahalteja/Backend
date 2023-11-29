const express = require("express");
const mongoose = require("mongoose");
const blogModel = require("./Models/BlogSchema");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/addblog", async (req, res) => {
  const data = req.body;
  console.log(data);
  const blog = new blogModel({ ...data });
  await blog
    .save()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
});
mongoose
  .connect(
    "mongodb+srv://nmvmanikanta:MavinNara1234@cluster0.mktinqb.mongodb.net/personalBlog?retryWrites=true&w=majority"
  )
  .then((response) => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3500, () => {
  console.log("Server running on port 3500");
});
