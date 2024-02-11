const express = require("express");
const connectDB = require("./connection");
const bodyParser = require("body-parser");
const newsRoute = require("./route/newsRoute");
const cors = require("cors");
const path = require("path");

// swagger

const PORT = 4003;
const app = express();

// connect DB
connectDB();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("uploads"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use("/news", newsRoute);

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});
