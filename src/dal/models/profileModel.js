const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  userName: {type: String, required: true}
  ,userId: {type: String, required: true}
  ,mmr: {type: Number, required: true}
  ,wins: {type: Number, required: true}
  ,losses: {type: Number, requred: true}
});

module.exports = mongoose.model('profiles', profileSchema)