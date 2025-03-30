const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect("mongodb://localhost:27017/aroundb");

app.use((req, res, next) => {
  req.user = {
    _id: "67e407d2ad8e3d4adac9bef5",
  };
  next();
});

app.use(express.json());

app.use("/", usersRouter);
app.use("/", cardsRouter);

app.listen(PORT, () => {
  console.log("Enlace al servidor en el puerto:" + PORT);
});
