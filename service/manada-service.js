const faker = require('faker');
const boom = require('@hapi/boom');
const Model = require('../models/manadas.model');

class ManadaService {
    constructor() {
      this.manadas = [];
      this.generate();
    }

    generate() {
      const limit = 100;
      for (let index = 0; index < limit; index++) {
        this.manadas.push({
          id: faker.datatype.uuid(),
          name: faker.name.title(),
          description: faker.lorem.paragraph(),
          image: faker.image.imageUrl(),
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
      let manadasDB = await Model.find(filter);
      manadasDB = limit ? manadasDB.filter((item, index) => item && index < limit) : manadasDB;

      if (manadasDB == undefined || manadasDB == null)
        throw boom.notFound('No se encontró catálogo');
      else if (manadasDB.length <= 0)
        throw boom.notFound('No se encontró ningún registro');

      return manadasDB;
    }

    async findOneDB(id) {
      const manada = await Model.findOne({
        _id: id
      });
      if (manada == undefined || manada == null)
        throw boom.notFound('No se encontró catálogo');
      else if (manada.length <= 0)
        throw boom.notFound('No se encontró ningún registro');
      return manada;
    }


//-----

    // find(size) {
    //   const manadas = this.manadas.filter((item, index) => item && index < size);
    //   if (!manadas)
    //       throw boom.notFound('No se encontró la manada solicitada');
    //   else if (manadas.length <= 0)
    //      throw boom.notFound('No hay manadas registradas');
    //   return manadas
    // }

    // create(data) {
    //   const newManada = {
    //     id: faker.datatype.uuid(),
    //     ...data
    //   }
    //   this.manadas.push(newManada);
    //   return newManada;
    // }

    // findOne(id) {
    //   const manada = this.manadas.find((item) => item.id === id)
    //   if (!manada)
    //     throw boom.notFound('La manada no fue encontrada');
    //   return manada;
    // }

    // update() {

    // }
  }

module.exports = ManadaService;
