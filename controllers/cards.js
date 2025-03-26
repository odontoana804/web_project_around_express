const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .populate('likes')
    .then(cards => res.send({ data: cards }))
    .catch(err => res.status(500).send({ message: "Error al leer datos de tarjetas" }));
};

module.exports.removeCard = (req, res) => {
  Card.deleteOne({_id: req.params.id})
      .then(() => res.send({ message: "Tarjeta eliminada" }))
      .catch(err => res.status(404).send({ message: "ID de tarjeta no encontrado" }));
}

