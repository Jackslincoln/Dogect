const faker = require('faker');
const boom = require('@hapi/boom');

class roleService {
  constructor() {
    this.roles = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++)
      this.roles.push({
        id: faker.datatype.uuid(),
        name: faker.name.title(),
        activo: true
        //equipos usuarios
      });
  }

  find(size) {
    const roles = this.roles.filter((item, index) => item && index < size);
    if (!roles)
        throw boom.notFound('No se encontró el rol solicitado');
    else if (roles.length <= 0)
       throw boom.notFound('No hay roles registrados todavia');
    return roles
  }

  create(data) {
    const newRole = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.roles.push(newRole);
    return newRole;
  }

  findOne(id) {
    const role = this.roles.find((item) => item.id === id)
    if (!role)
      throw boom.notFound('El rol no fue encontrado');
    return role;
  }

  update(id, changes) {
    const index = this.roles.findIndex(item => item.id === id);
    console.log(index);
    if (index === -1)
      throw boom.notFound('Rol no encontrado');

    var currentRole = this.roles[index];
    this.roles[index] = {
      ...currentRole,
      ...changes
    };
    return {
      old: currentRole,
      changed: this.roles[index]
    };
  }

  delete(id) {
    const index = this.roles.findIndex(item => item.id ===id);
    if (index === -1)
      throw boom.notFound('Rol not found');

      var currentRole = this.roles[index];
      this.roles.splice(index, 1);
      return currentRole;
  }
}

module.exports = roleService;


// const roles_schema = require('../models/roles');
// /**
//  * @returns {Promise<Roles[]>}
//  */
// async function readroles(){
//     let roles = await roles_schema.find({}).exec();
//     return roles;
// }

// /**
//  * @param {string} id
//  * @returns {Promise<Roles>}
//  */
//  async function readOneRole(id){
//     let rol = await roles_schema.findById(id).exec();
//     return rol;
// }


// module.exports = {
//     readroles,
//     readOneRole
// }
