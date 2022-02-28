//const equipos_schema = require('../models/equipos');
const faker = require('faker');
const boom = require('@hapi/boom');

class EquipoService {
    constructor() {
      this.equipos = [];
      this.generate();
    }
    /*generate() {  //generar nuevos usuarios
      const limit = 100;  //creo que despues hay que quitarle el limite
      for (let index = 0; index < limit; index++)
        this.equipos.push({
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          pass: faker.internet.password(),
          activo: true
          //lo de equipos y manadas pero ahi no se muy bien el rollo
        });
    }*/
  

  
    createTeam(data) {
      const newTeam = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.equipos.push(newTeam);
      return newTeam;
    }
  
  
    deleteTeam(id) {
      const index = this.equipos.findIndex(item => item.id ===id);
      if (index === -1)
        throw boom.notFound('Equipo no encontrado');
  
        var currentTeam = this.equipos[index];
        this.equipos.splice(index, 1);
        return currentTeam;
    }
  }

/*async function readequipos(){
    let equipos = await equipos_schema.find({}).exec();
    return equipos;
}*/

module.exports = EquipoService;