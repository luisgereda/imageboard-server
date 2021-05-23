const { Router } = require("express");
const Image = require("../models").image;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      res.status(400).send("missing parameters");
    } else {
      const newImage = await Image.create(req.body);
      res.json(newImage);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:title", async (req, res, next) => {
  try {
    const title = req.params.title;
    console.log(title);
    const result = await Image.findOne({ where: { title } });
    console.log(result);
    res.send(result);
  } catch (e) {
    next(e);
  }
});

// router.get("/one", async (req, res, next) => {
//   try {
//     const title = req.body.title;
//     console.log(title);
//     if (!title) {
//       res.status(400).send("mal");
//     } else {
//       const result = await Image.findOne({ where: { title: title } });
//       res.send(result);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

router.post("/one", async (req, res, next) => {
  try {
    const title = req.body.title;
    console.log(title);
    const respo = await Image.findOne({ where: { title } });
    console.log(respo);
    res.json(respo);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
