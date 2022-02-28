const Joi = require('joi');

const name = Joi.string().alphanum().min(3).max(30);
const description = Joi.string().min(15).max(256);

const createTeamDto = Joi.object({
    name: name.required(),  //required() -> que es forzoso que incluyan estos datos
    description: description.required()

  });

const getTeamId = Joi.object({
    id: id.required(),
  });




  module.exports = {createTeamDto, getTeamId}