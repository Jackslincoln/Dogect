const roles_schema = require('../models/roles');
/**
 * @returns {Promise<Roles[]>}
 */
async function readroles(){
    let roles = await roles_schema.find({}).exec();
    return roles;
}

/**
 * @param {string} id
 * @returns {Promise<Roles>}
 */
 async function readOneRole(id){
    let rol = await roles_schema.findById(id).exec();
    return rol;
}


module.exports = {
    readroles,
    readOneRole
}