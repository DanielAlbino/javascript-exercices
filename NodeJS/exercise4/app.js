const express = require("express");
const app = express();

app.use(function(req, res, next) {
  console.log("our middleware ran!");
  return next();
});

app.get("/", function(req, res, next) {
  return res.json("We made it to the root route!");
});

app.listen(3000, function() {
  console.log("server starting!");
});

//catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

/* 
    Error handler - for a handler with four parameters,
    the first is assumed to be an error passed by another handler's "next"
*/

app.use((err, re, res, next) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    error: app.get("env") === "development" ? err : {}
  });
});
