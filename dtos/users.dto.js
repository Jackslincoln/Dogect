const Joi = require('joi');

const id = Joi.string().alphanum();
const name = Joi.string().alphanum().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const email = Joi.string().email({tlds: {allow: false}});
const password = Joi.string().min(4).max(8);
const image = Joi.string();
const active = Joi.boolean();
const listOfManadas = Joi.array();
const listOfEquipos = Joi.array();

const createUserDto = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  image: image,
  active: active,
  manadas: listOfManadas,
  equipos: listOfEquipos
});

const updateUserDto = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  password: password,
  image: image,
  active: active,
  manadas: listOfManadas,
  equipos: listOfEquipos
});

const getUserId = Joi.object({
  id: id.required(),
});

const getUserManadasId = Joi.object({
  idUser: id.required(),
});

const getUserEquiposId = Joi.object({
  idUser: id.required()
});

module.exports = {createUserDto, updateUserDto, getUserId, getUserManadasId, getUserEquiposId};
