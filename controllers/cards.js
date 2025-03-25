const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .populate('likes')
    .then(cards => res.send({ data: cards }))
    .catch(err => res.status(500).send({ message: "Error al leer datos de tarjetas" }));
};