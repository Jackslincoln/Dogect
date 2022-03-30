const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA DB
const userSchema = new Schema({
  id: String,
  name: String,
  lastName: String,
  email: String,
  password: String,
  image: String,
  active: Boolean,
  manadas: Array,
  equipos: Array
});
const model = mongoose.model('users', userSchema);
module.exports = model;
