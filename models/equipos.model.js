const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const equipoSchema = new Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  description: String,
  image: String,
  creator: mongoose.Types.ObjectId, //de este no estoy muy segura si asi es
  //los integrantes
  manada: mongoose.Types.ObjectId,  //cual es la diferencia entre schema.types y mongoose.types xd
  activo: Boolean
});
const model = mongoose.model('equipos', equipoSchema);
module.exports = model;
