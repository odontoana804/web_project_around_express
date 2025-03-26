const mongoose = require('mongoose');

const user = require('../models/user');


const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
          return v.find(/(https?\:\/\/)?(w{3}\.)?\w+\.\w+\/?[\w\W\d]*?/gi); //revisar
        },
        message: 'Introducir URL valida',
      }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,      //falta poner que puede ser arreglo vacio
    ref: user,
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('card', cardSchema)