const faker = require('faker');
const boom = require('@hapi/boom');
const UserModel = require('../models/usuario.model');

const NOTFOUNDCATALOG = 'No se encontró el usuario solicitado';
const NOTFOUNDROWS = 'No hay usuarios registrados todavia';
class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {  //generar nuevos usuarios
    const limit = 100;  //creo que despues hay que quitarle el limite
    for (let index = 0; index < limit; index++)
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        pass: faker.internet.password(),
        activo: true
        //lo de equipos y manadas pero ahi no se muy bien el rollo
      });
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

  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    console.log(index);
    if (index === -1)
      throw boom.notFound('Usuario no encontrado');

    var currentUser = this.users[index];
    this.users[index] = {
      ...currentUser,
      ...changes
    };
    return {
      old: currentUser,
      changed: this.users[index]
    };
  }

  delete(id) {
    const index = this.users.findIndex(item => item.id ===id);
    if (index === -1)
      throw boom.notFound('User not found');

      var currentUser = this.users[index];
      this.users.splice(index, 1);
      return currentUser;
  }

  //----- DB METHODS -----
  async findDB(limit, filter) {
    let usersDB = await UserModel.find(filter);

    if (!usersDB)
        throw boom.notFound(NOTFOUNDCATALOG);
    else if (usersDB.length <= 0)
       throw boom.notFound(NOTFOUNDROWS);

    usersDB = limit ? usersDB.filter((item, index) => item && index < limit) : usersDB;
    return usersDB;
  }

  async createDB(data) {
    const model = new UserModel(data);
    await model.save();
    return data;
  }

  async findOneDB(id) {
    try {
      // var regexTextId = "^[a-zA-Z0-9_]*$";
      // var rgxId = new RegExp(regexTextId);
      // if (!rgxId.test(id))
      //   throw boom.badRequest('El id no tiene el formato correcto');

      const user = await UserModel.findOne({
        _id: id
      });
      if (user == undefined || user == null)
        throw boom.notFound('No se encontró catálogo');
      else if (user.length <= 0)
        throw boom.notFound('No se encontó ningún registro');
      return user;
    } catch (err) {
      throw boom.conflict("Ha ocurrido un error, favor de contactar con el administrador: " + err.message);
    }

  }

  async updateDB(id, changes) {
    let user = await UserModel.findOne({
      _id: id
    });

    if (user == undefined || user == null)
      throw boom.notFound('No se encontró catálogo');
    else if (user.length <= 0)
      throw boom.notFound('No se encontó ningún registro');

    let userOriginal = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      image: user.image,
      active: user.active,
      manadas: user.manadas,
    };
    const { name, lastName, email, password, image, active, manadas } = changes;
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.image = image;
    user.active = active;
    user.manadas = manadas;
    user.save();

    return {
      original: userOriginal,
      actualizado: user
    }
  }

  async deleteDB(id) {
    let user = await UserModel.findOne({
      _id: id
    });
    const { deletedCount } = await UserModel.deleteOne({
      _id: id
    });
    if (deletedCount <= 0)
      throw boom.notFound('El registro seleccionado no existe');
    return user;
  }
}



module.exports = UserService;
