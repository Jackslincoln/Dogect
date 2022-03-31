const faker = require('faker');
const boom = require('@hapi/boom');
//const tareas_schema = require('../models/tareas');

class tareaService {
  constructor() {
    this.tareas = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++)
      this.tareas.push({
        id: faker.datatype.uuid(),
        title: faker.name.title(),
        fecha_entrega: faker.date.past(),
        fecha_limite: faker.date.future(),
        completada: true
        //responsables
      });
  }

  find(size) {
    const tareas = this.tareas.filter((item, index) => item && index < size);
    if (!tareas)
        throw boom.notFound('No se encontró la tarea solicitada');
    else if (tareas.length <= 0)
       throw boom.notFound('No hay tareas registradas todavia');
    return tareas
  }

  create(data) {
    const newTarea = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.tareas.push(newTarea);
    return newTarea;
  }

  findOne(id) {
    const tarea = this.tareas.find((item) => item.id === id)
    if (!tarea)
      throw boom.notFound('La tarea no fue encontrada');
    return tarea;
  }

  update(id, changes) {
    const index = this.tareas.findIndex(item => item.id === id);
    console.log(index);
    if (index === -1)
      throw boom.notFound('Tarea no encontrada');

    var currentTarea = this.tareas[index];
    this.tareas[index] = {
      ...currentTarea,
      ...changes
    };
    return {
      old: currentTarea,
      changed: this.tareas[index]
    };
  }

  delete(id) {
    const index = this.tareas.findIndex(item => item.id ===id);
    if (index === -1)
      throw boom.notFound('Tarea not found');

      var currentTarea = this.tareas[index];
      this.tareas.splice(index, 1);
      return currentTarea;
  }
}

module.exports = tareaService;


// /**
//  * @returns {Promise<Tarea[]>}
//  */
// async function readtareas(){
//     let tareas = await tareas_schema.find({}).exec();
//     return tareas;
// }

// /**
//  * @param {string} id
//  * @returns {Promise<Tarea>}
//  */
// async function readOneTarea(id){
//     let tarea = await tareas_schema.findById(id).exec();
//     return tarea;
// }

// module.exports = {
//     readtareas,
//     readOneTarea
// }
