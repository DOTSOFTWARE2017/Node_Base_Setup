const dbcon = require("../config/config");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


router.post("/login", (req, res, next) => {
  dbcon.query(
    `SELECT * FROM login WHERE password  = ${dbcon.escape(req.body.password)};`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: "Email or password is incorrect!",
        });
      }
      if (result) {
        return res.status(200).send("Login sucessfully");
      }
    }
  );
});
module.exports = router;
