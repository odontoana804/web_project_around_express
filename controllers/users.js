const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: "Error al leer datos de usuarios" }));
};


module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
      .then(user => res.send({ data: user }))
      .catch(err => res.status(404).send({ message: "ID de usuario no encontrado" }));
}