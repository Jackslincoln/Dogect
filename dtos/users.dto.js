const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().alphanum().min(3).max(15);
const lastName = Joi.string().alphanum().min(3).max(15);
const email = Joi.string().email({tlds: {allow: false}});
const pass = Joi.string().min(4).max(8);

const createUserDto = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  pass: pass.required()
});

const updateUserDto = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  pass: pass,
});

const getUserId = Joi.object({
  id: id.required(),
});

module.exports = {createUserDto, updateUserDto, getUserId};
