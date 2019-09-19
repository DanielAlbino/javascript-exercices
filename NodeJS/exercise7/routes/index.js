const express = require("express");
const router = express.Router();
const db = require("../db");

//GET
router.get("/", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM fishes");
    return res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});

//POST
router.post("/", async function(req, res, next) {
  try {
    const result = await db.query(
      "INSERT INTO fishes (name, type) VALUES ($1, $2) RETURNING *",
      [req.body.name, req.body.type]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

//PATCH
router.patch("/:id", async function(req, res, next) {
  try {
    const result = await db.query(
      "UPDATE fishes set name=$1, type=$2 WHERE id=$3 RETURNING *",
      [req.body.name, req.body.type, req.body.id]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
