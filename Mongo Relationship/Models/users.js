const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDemo")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Connection Error: ");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  address: [
    {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async() => {
  const u = new User({
    first: "Harry",
    last: "Potter",
  });
  u.address.push({
    street: "123 seasame st",
    city: "New York",
    state: "NY",
    country: "USa", 
  });
  const res = await u.save();
  console.log(res)

};
makeUser();