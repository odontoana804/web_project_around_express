const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .populate('likes')
    .then(cards => res.send({ data: cards }))
    .catch(err => res.status(500).send({ message: "Error al leer datos de tarjetas" }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
      .then(user => res.status(201).send({ data: user }))
      .catch(err => res.status(400).send({ message: err.message }));
};

module.exports.removeCard = (req, res) => {
  Card.deleteOne({_id: req.params.id})
      .orFail()
      .then(() => res.send({ message: "Tarjeta eliminada" }))
      .catch(err => res.status(404).send({ message: "ID de tarjeta no encontrado" }));
};

