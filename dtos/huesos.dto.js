const Joi = require('joi');

const description = Joi.string().min(10).max(50);
const activos = Joi.bool();


const createHuesoDto = Joi.object({
    description: description.required(),  //required() -> que es forzoso que incluyan estos datos

  });

const getHuesoId = Joi.object({
    id: id.required(),
  });

