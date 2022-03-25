const Joi = require('joi');

const idManada = Joi.string().alphanum();
const name = Joi.string().min(3).max(30);
const description = Joi.string();
const image = Joi.string();
const activo = Joi.boolean();

//luego no se si aqui se incluyen los equipos

const createManadaDto = Joi.object({
  name: name.required(),
  description: description,
  image: image,
  activo: activo
});

const updateManadaDto = Joi.object({
  name: name,
  description: description,
  image: image,
  activo: activo
});

const getManadaIdDto = Joi.object({
  idManada: idManada.required()
});

module.exports = { createManadaDto, updateManadaDto, getManadaIdDto };
