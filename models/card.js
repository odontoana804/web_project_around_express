const mongoose = require('mongoose');

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
          return v.find(/(https?\:\/\/)?(w{3}\.)?\w+\.\w+\/?[\w\W\d]*?/gi); //buscar con regEx
        },
        message: 'Introducir URL valida',
      }
  },
  owner: {
    type: String,//objectId
  },
  likes: {
    type: String, //array ObjectId,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('card', cardSchema)