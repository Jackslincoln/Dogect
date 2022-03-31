//const equipos_schema = require('../models/equipos');
const faker = require('faker');
const boom = require('@hapi/boom');
const Model = require('../models/equipos.model');

class EquipoService {
    constructor() {
      this.equipos = [];
      this.generate();
    }

    generate() {
      const limit = 100;
      for (let index = 0; index < limit; index++) {
        this.equipos.push({
          id: faker.datatype.uuid(),
          name: faker.name.title(),
          description: faker.lorem.paragraph(),
          image: faker.image.imageUrl(),
          creator: faker.datatype.uuid(),
          activo: true
        });
      }
    }

    async createDB(data) {
      const model = new Model(data);
      model.save();
      return data;
    }

    async findDB(limit, filter) {
      let equiposDB = await Model.find(filter);
      equiposDB = limit ? equiposDB.filter((item, index) => item && index < limit) : equiposDB;

      if (equiposDB == undefined || equiposDB == null)
        throw boom.notFound('No se encontró catálogo');
      else if (equiposDB.length <= 0)
        throw boom.notFound('No se encontró ningún registro');

      return equiposDB;
    }

    async findOneDB(id) {
      const equipo = await Model.findOne({
        _id: id
      });
      if (equipo == undefined || equipo == null)
        throw boom.notFound('No se encontró catálogo');
      else if (equipo.length <= 0)
        throw boom.notFound('No se encontró ningún registro');
      return equipo;
    }
}

module.exports = EquipoService;
