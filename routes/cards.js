const cardsRouter = require("express").Router();
const { getCards } = require("../data/db");

cardsRouter.get("/cards", async (req, res) => {
  try {
    const cards = await getCards();
    res.send(cards);
  } catch (error) {
    res.status(500).send({ message: "Error al leer datos de tarjetas" });
  }
});

module.exports = cardsRouter;
