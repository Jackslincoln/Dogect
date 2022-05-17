const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const manadaSchema = new Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  description: String,
  image: String,
  activo: Boolean
  //id del creador
  //los integrantes
});
const model = mongoose.model('manadas', manadaSchema);
module.exports = model;
