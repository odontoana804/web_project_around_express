const cardsRouter = require("express").Router();
const { getCards } = require("../controllers/cards");

cardsRouter.get("/cards", getCards );

/* cardsRouter.get("/cards/:id", async (req, res) => {
  const cards = await getCards();
  const { id } = req.params;
  const selectedCard = cards.find(card => card._id === id)

  if (!selectedCard) {
    res.status(404).send({ message: "ID de tarjeta no encontrado" });
    return;
  }
  res.send(selectedCard);
});
 */
module.exports = cardsRouter;
