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

cardsRouter.get("/cards/:id", async (req, res) => {
  const cards = await getCards();
  const { id } = req.params;
  const selectedCard = cards.filter(card => card._id === id)

  if (selectedCard.length === 0) {
    res.send({ message: "ID de tarjeta no encontrado" });
    return;
  }
  res.send(selectedCard);
});

module.exports = cardsRouter;
