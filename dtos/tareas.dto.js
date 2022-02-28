const Joi = require('joi');

const id = Joi.string().uuid();
const titulo = Joi.string().required().max(50).regex(/^w+(?:s+w+)*$/);
const fecha_entrega = Joi.date().format('YYYY-MM-DD');
const fecha_limite = Joi.date().format('YYYY-MM-DD');

const createTareaDto = Joi.object({
  titulo: titulo.required(),
  fecha_entrega: fecha_entrega.required(),
  fecha_limite: fecha_limite.required()
});

const updateTareaDto = Joi.object({
  titulo: titulo,
  fecha_entrega: fecha_entrega,
  fecha_limite: fecha_limite
  //responsables
});

const getTareaId = Joi.object({
  id: id.required(),
});

module.exports = {createTareaDto, updateTareaDto, getTareaId};
