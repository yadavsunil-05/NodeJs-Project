const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

const app = express();
app.use(express.json());
app.use(cors());

// <----------- User Authentication ------------->

app.post("/register", async (req, resp) => {
  const user = new User(req.body);
  let result = await user.save(); //inserting data in DB
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
    user ? resp.send(user) : resp.send({ result: "No User Found!!" });
  } else {
    resp.send({ result: "No User Found!!" });
  }
});

// <----------- Products ------------->

app.post("/add-product", async (req, resp) => {
  const product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.get("/products", async (req, resp) => {
  let products = await Product.find();
  products.length
    ? resp.send(products)
    : resp.send({ result: "No Product Found" });
});

app.delete("/product/:id", async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/product/:id", async (req, resp) => {
  let sigproduct = await Product.findOne({ _id: req.params.id });
  sigproduct ? resp.send(sigproduct) : resp.send({ result: "No User Found!!" });
});

app.put("/product/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

app.get("/search/:key", async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key, $options: "i" } },
    ],
  });
  resp.send(result);
});

app.listen(5000);
