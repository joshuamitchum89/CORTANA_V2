const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  userName: {type: String, required: true}
  ,userId: {type: String, required: true}
  ,mmr: {type: Number, required: true}
  ,wins: {type: Number, required: true}
  ,losses: {type: Number, requred: true}
  ,rank: {type: Number, required: true}
  ,rankRole: {type: Number, required: true}
  ,emblem: {type: String, required: true}
  ,gamerTag: {type: String, required: true}
});

module.exports = mongoose.model('profiles', profileSchema)