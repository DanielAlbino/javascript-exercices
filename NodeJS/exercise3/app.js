const express = require("express");
const bodyParse = require("body-parser");

const app = express();

//require our routes/index.js file
const useRoutes = require("./routes");

app.use(bodyParse.json());

//Now let's tell our app about those routes we made!
app.use("/users", useRoutes);

app.get("/", (req, res) => {
  return res.json("Start with /users");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
