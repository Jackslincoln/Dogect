//const manadas_schema = require('../models/manada');
const faker = require('faker');
const boom = require('@hapi/boom');

class ManadaService {
    constructor() {
      this.manadas = [];
      this.generate();
    }
    generate() {  //generar nuevos usuarios
      // const limit = 100;  //creo que despues hay que quitarle el limite
      // for (let index = 0; index < limit; index++)
      //   this.manadas.push({
      //     id: faker.datatype.uuid(),
      //     name: faker.name.firstName(),
      //     lastName: faker.name.lastName(),
      //     email: faker.internet.email(),
      //     pass: faker.internet.password(),
      //     activo: true
      //     //lo de equipos y manadas pero ahi no se muy bien el rollo
      //   });
    }
  
    find(size) {
      const manadas = this.manadas.filter((item, index) => item && index < size);
      if (!manadas)
          throw boom.notFound('No se encontró la manada solicitada');
      else if (manadas.length <= 0)
         throw boom.notFound('No hay manadas registradas');
      return manadas
    }
  
    create(data) {
      const newManada = {
        id: faker.datatype.uuid(), 
        ...data
      }
      this.manadas.push(newManada);
      return newManada;
    }
  
    findOne(id) {
      const manada = this.manadas.find((item) => item.id === id)
      if (!manada)
        throw boom.notFound('La manada no fue encontrada');
      return manada;
    }
  
    update() {
  
    }
  }

/*
 * @param {string} id
 * @returns {Promise<Manada>}
 */
/*async function readmanada(id){
    let manada = await manadas_schema.findById(id).exec();
    return manada;
}
*/
module.exports = ManadaService;