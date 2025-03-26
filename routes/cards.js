const cardsRouter = require("express").Router();
const { getCards, removeCard } = require("../controllers/cards");

cardsRouter.get("/cards", getCards );

cardsRouter.delete("/cards/:id", removeCard);

module.exports = cardsRouter;
