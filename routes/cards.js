const cardsRouter = require("express").Router();
const { getCards, createCard, removeCard } = require("../controllers/cards");

cardsRouter.get("/cards", getCards );

cardsRouter.post("/cards", createCard);

cardsRouter.delete("/cards/:id", removeCard);


module.exports = cardsRouter;
