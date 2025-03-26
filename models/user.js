const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return v.find(/(https?\:\/\/)?(w{3}\.)?\w+\.\w+\/?[\w\W\d]*?/gi);  //revisar
        },
        message: 'Introducir URL valida',
      }
  },
});

module.exports = mongoose.model('user', userSchema)