const express = require("express");

/* 
    The Router is an object on the base express module
    This router object will have similar methods (.get, .post, .patch, .delete) to the app object.
*/

const router = express.Router();

const users = []; //this would ideally be a database, but we'll start with something simple

var id = 1; // this will help us indentify unique users

//instead of app.get
//GET
router.get("/users", (req, res) => {
  return res.json(users);
});

router.get("/users/:id", (req, res) => {
  const user = users.find(val => val.id === Number(req.params.id));
  return res.json(user);
});

//POST
router.post("/users", (req, res) => {
  users.push({
    name: req.body.name,
    id: ++id
  });
  return res.json({ message: "Created" });
});

//PATCH
router.patch("/users/:id", (req, res) => {
  const user = users.find(val => val.id === Number(req.params.id));
  user.name = req.body.name;
  return res.json({ message: "Updated" });
});

//DELETE
router.delete("/users/:id", (req, res) => {
  const userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex, 1);
});

//now that we have built up all these routes - let's export thsi module for use in our app.js!
module.exports = router;
