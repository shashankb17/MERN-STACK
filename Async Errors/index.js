const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const AppError = require("./AppError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // this line should be present whenever we are making a POST request
app.use(methodOverride("_method"));

const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand2")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Oh No Mongo Connection Error!!!");
    console.log(err);
  });

//Async utility
function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

app.get("/products", wrapAsync(async (req, res, next) => {
  const products = await Product.find({});
  res.render("products/index", { products });
}));

app.get("/products/new", (req, res) => {
  res.render("products/new");
});

app.post("/products", wrapAsync(async (req, res, next) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
}));

//error checking
app.get("/products/:id", wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw next(new AppError("Product not found", 404));
  }
  res.render("products/show", { product });
}));

app.get("/products/:id/edit", wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw next(new AppError("Product not found", 404));
  }
  res.render("products/edit", { product });
}));

app.put("/products/:id", wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
  runValidators: true,
  new: true,
  });
  res.redirect(`/products/${product._id}`);
}));

app.delete("/products/:id", wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
}));

app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Port 3000 is Activated");
});
