const express = require("express");
const mongoose = require('mongoose');
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/aroundb');

app.use("/", usersRouter);
app.use("/", cardsRouter);

app.listen(PORT, () => {
  console.log("Enlace al servidor en el puerto:" + PORT);
});
