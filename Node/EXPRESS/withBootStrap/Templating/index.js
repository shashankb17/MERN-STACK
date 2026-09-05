const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "/public"))); // this is used to add the css and all js files to the backend

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // path.join means it is used to state absolute path , if we are outside pf the director where the viewws folder is not present then this will helps to lacate it and run

app.get("/", (req, res) => {
  res.render("home.ejs"); // render() :- by default it will assume there is a views folder and we will specify the file name(.ejs) to show it in the homepage
});
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num }); //{key : value} should be passedin the ejs file as the key in the tags
});
app.get("/cats", (req, res) => {
  cats = ["Jimmy", "Tommy", "Bonnie", "Dadu", "Adi"];
  res.render("cats", { cats });
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params; // params means in url what we type after that pattern will be stored in the object called subreddit
  const data = redditData[subreddit];
  console.log(data);
  if (data) {
    res.render("subreddit", { ...data }); //...data means splitting all the data and choosing what all we want
  } else {
    res.render("notfound", { subreddit });
  }
});

app.listen(3030, () => {
  console.log("Yeh Listening on Port 3030");
});
