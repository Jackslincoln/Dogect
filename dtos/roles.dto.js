const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum();

const createRoleDto = Joi.object({
  name: name.required()
});

const updateRoleDto = Joi.object({
  name: name
});

const getRoleId = Joi.object({
  id: id.required(),
});

module.exports = {createRoleDto, updateRoleDto, getRoleId};
