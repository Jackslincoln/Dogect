const user_schema = require('../models/usuario');

/**
 * @returns {Promise<User[]>}
 */
async function read(){
    let users = await user_schema.find({}).exec();
    return users;
}

/**
 * @param {string} id
 * @returns {Promise<User>}
 */
async function readOne(id){
    let user = await user_schema.findById(id).exec();
    return user;
}

module.exports = {
    read,
    readOne
}