process.env.NODE_ENV = require("dotenv").config();
const { mongoConnect } = require("./config/mongo");
const express = require("express");
const app = express();
const PORT = 4001;
const router = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

mongoConnect().then((database) => {
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
});
