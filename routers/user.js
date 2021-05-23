const express = require("express");
const { Router } = express;
const User = require("../models").user;
const router = new Router();
module.exports = router;
const bcrypt = require("bcrypt");

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
//     const { email, password, fullName } = req.body;
//     if (!email || !password || !fullName) {
//       res.status(400).send("missing parameters");
//     } else {
//       const newUser = await User.create({
//         email,
//         password,
//         fullName,
//       });
//       res.json(newUser);
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
      const newUser = await User.create({
        email,
        password: bcrypt.hashSync(password, 10),
        fullName,
      });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

// router.post("/", async (req, res, next) => {
//   try {
//     const { email, password, fullName } = req.body;
//     if (!email || !password || !fullName) {
//       res.status(400).send("missing parameters");
//     } else {
//       const newUser = await User.create({
//         email,
//         // Here, when handing down the password to the create method we hash it.
//         password: bcrypt.hashSync(password, 10),
//         fullName,
//       });

//       res.json(newUser);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const { email, password, fullName } = req.body;
//     if (!email || !password || !fullName) {
//       res.status(400).send("missing parameters");
//     } else {
//       const newUser = await User.create(req.body);
//       res.json(newUser);
//     }
//   } catch (e) {
//     next(e);
//   }
// });
