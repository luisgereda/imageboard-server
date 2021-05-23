const express = require("express");
const { Router } = express;
const User = require("../models").user;
const router = new Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (e) {
    next(e);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     const { email, passwoord, fullName } = req.body;
//     if (!email || !passwoord || !fullName) {
//       res.status(400).send("missing parameters");
//     } else {
//       const create = await User.create(req.body);
//       res.send("user created", create);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

router.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).send("missing parameters");
    } else {
      const newUser = await User.create(req.body);
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});
