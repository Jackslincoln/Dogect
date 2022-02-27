const faker = require('faker');
const boom = require('@hapi/boom');
//const user_schema = require('../models/usuario');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {  //generar nuevos usuarios
    // const limit = 100;  //creo que despues hay que quitarle el limite
    // for (let index = 0; index < limit; index++)
    //   this.users.push({
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
    const users = this.users.filter((item, index) => item && index < size);
    if (!users)
        throw boom.notFound('No se encontró el usuario solicitado');
    else if (users.length <= 0)
       throw boom.notFound('No hay usuarios registrados todavia');
    return users
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  findOne(id) {
    const user = this.users.find((item) => item.id === id)
    if (!user)
      throw boom.notFound('El usuario no fue encontrado');
    return user;
  }

  update() {

  }
}

// /**
//  * @returns {Promise<User[]>}
//  */
// async function read(){
//     let users = await user_schema.find({}).exec();
//     return users;
// }

// /**
//  * @param {string} id
//  * @returns {Promise<User>}
//  */
// async function readOne(id){
//     let user = await user_schema.findById(id).exec();
//     return user;
// }

// module.exports = {
//     read,
//     readOne
// }

module.exports = UserService;
