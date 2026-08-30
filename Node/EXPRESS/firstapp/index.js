const express = require("express");
const app = express();

// app.use((req, res) => {
//   //THIS FUNCTION GETS EXECUTED WHENEVER A REQUEST IS ARRIVED FROM THE SERVER
//   console.log("We got a new request!!");
//   res.send("HEY, WE GOT REQUEST AND THIS IS THE RESPONSE :)"); //SEND() SENDS THE RESPONSE TO THE REQUEST RAISED BY THE CLINT FROM THE SERVER
// });

app.get("/", (req, res) => {
  res.send("This is the Home page");
});
app.get("/r/:subreddit", (req, res) => {
  //if the pattern like `/r/ matches in the url then this function is executed
  const { subreddit } = req.params; // req.params get the input typed by the user
  res.send(`<h1>This is the ${subreddit} subreddit`);
});
app.get("/example", (req, res) => {
  res.send("This is the example page");
});
app.get("/demo", (req, res) => {
  res.send("This is the demo page");
});
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing will be found if nothing searched!!");
  } else {
    res.send(`Search resilts for ${q}`);
  }
});
app.get("/{*path}", (req, res) => {
  res.send(`I Don't Know Man!!`);
});

app.listen(3030, () => {
  // THIS FUNCTION GETS EXECUTED WHENEVER THE SERVER IS STARTED
  console.log("Listening on port 3030");
});
