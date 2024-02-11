const express = require("express");
const router = express.Router();
const newsController = require("../controller/newsController");
const multer = require("multer");

// set storage to images
let storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads");
  },
  filename: (req, res, cb) => {
    cb(null, res.fieldname + "_" + Date.now() + "_" + res.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

// all news

router.get("/", newsController.getNews);

router.get("/trend", newsController.getTrendNews); // get trend news

router.post("/", upload, newsController.addNew);

router.delete("/", newsController.deleteNew);

module.exports = router;
