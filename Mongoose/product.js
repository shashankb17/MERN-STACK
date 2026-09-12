const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Open!!!");
  })
  .catch((err) => {
    console.log("Oh Error");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be Positive'],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
});

const Product = new mongoose.model("Product", productSchema);
// const bike = new Product({ name: "Mountain Bike", price: "200" });
// bike.save()
//   .then((data) => {
//     console.log("It worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no Error!!!");
//     console.log(err);
//   });

Product.findOneAndUpdate(
  { name: "Mountain Bike" },
  { price: 500 },
  { new: true, runValidators: true },
)
  .then((data) => {
    console.log("It worked");
    console.log(data);
  })
  .catch((err) => {
    console.log("Oh no Error!!!");
    console.log(err);
  });
