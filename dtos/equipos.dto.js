const Joi = require('joi');

const idEquipo = Joi.string().alphanum();
const name = Joi.string().min(3).max(30);
const description = Joi.string();
const image = Joi.string();
const creator = Joi.string().alphanum();
const manada = Joi.string().alphanum();
const activo = Joi.boolean();

const createEquipoDto = Joi.object({
  name: name.required(),
  description: description,
  image: image,
  creator: creator,
  manada: manada,
  activo: activo
});

const updateEquipoDto = Joi.object({
  name: name,
  description: description,
  image: image,
  activo: activo
  //la manada y el creador no porque no se puede cambiar de manada lmaoo
});

const getEquipoIdDto = Joi.object({
  idEquipo: idEquipo.required()
});

  module.exports = {createEquipoDto, updateEquipoDto, getEquipoIdDto};
