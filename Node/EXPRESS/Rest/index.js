const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid"); //For generating ID's
const methodOverride = require("method-override"); // it allows the html form to submit the patch or delete request

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments"); //redirects to the some URL mentioned
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

// app.get('/comments/:id/edit', (req, res) => {
//     const { id } = req.params;
//     console.log("URL ID:", id);
//     console.log("Comments:", comments);
//     const comment = comments.find(c => c.id === id);
//     if (!comment) {
//         return res.status(404).send("Comment not found");
//     }
//     res.render('comments/edit', { comment });
// });

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newComment;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});
app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK HERE'S YOUR ${qty} ${meat} tacos`);
});
app.listen(3030, () => {
  console.log("Port 3030 activated");
});
