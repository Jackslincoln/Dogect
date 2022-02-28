const Joi = require('joi');

const id = Joi.string().uuid();
const title = Joi.string().required().max(50).regex(/^w+(?:s+w+)*$/);
const content = Joi.string();
const fecha_creacion = Joi.date().format('YYYY-MM-DD');

const createNoteDto = Joi.object({
  title: title.required(),
  content: content.required(),
  fecha_creacion: fecha_creacion.required()
});

const updateNoteDto = Joi.object({
  title: title,
  content: content,
  fecha_creacion: fecha_creacion
});

const getNoteId = Joi.object({
  id: id.required(),
});

module.exports = {createNoteDto, updateNoteDto, getNoteId};
