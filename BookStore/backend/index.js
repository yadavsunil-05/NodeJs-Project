const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  const user = new User(req.body);
  let result = await user.save(); //inserting data in DB
  result = result.toObject()
  delete result.password
  resp.send(result);
});


app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password")
    user
      ? resp.send(user)
      : resp.send({ result: "No User Found!!" });
  } else {
    resp.send({ result: "No User Found!!" });
  }
});


app.listen(5000);
