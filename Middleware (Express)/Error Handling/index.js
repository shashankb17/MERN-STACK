const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppError");

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});
//****** Basic Authorization Example */
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "yoyo") {
    next();
  }
  throw new AppError("Password required", 401);
  // res.send("SORRY YOU NEED A PASSWORD.");
  // throw new Error("Password Required");
};
//******************************** */

// app.use((req,res,next)=>{
//     console.log("This is the First Middleware");
//     next(); //this is mandatory to pass the execution to the next routes or middlewares present
// })
// app.use((req,res,next)=>{
//     console.log("This is the Second Middleware");
//     next();
// })

app.get("/", (req, res) => {
  console.log(`Request Time : ${req.requestTime}`);
  res.send("Home Page!!!");
});

app.get("/dogs", (req, res) => {
  console.log(`Request Time : ${req.requestTime}`);
  res.send("YO!!!");
});

//**** Dummy function for generating error */
app.get("/error", () => {
  demo.demo();
});
/***************************************** */

app.get("/secret", verifyPassword, (req, res) => {
  res.send("My Secret is : Boost Energy");
});

// Setting up a 404 Route
app.use((req, res) => {
  res.status(404).send("NOT FOUND!!!");
});

//custom error handling
// app.use((err, req, res, next) => {
//   console.log("YOYO");
//   next(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong Buddy!!!" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("3000 PORT ACTIVATED");
});
