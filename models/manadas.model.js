const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const manadaSchema = new Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  description: String,
  image: String,
  creator: mongoose.Types.ObjectId,
  //los integrantes
  activo: Boolean,
  equipos: Array
});
const model = mongoose.model('manadas', manadaSchema);
module.exports = model;
