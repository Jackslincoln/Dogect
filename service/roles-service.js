const roles_schema = require('../models/roles');

async function readroles(){
    let roles = await roles_schema.find({}).exec();
    return roles;
}

module.exports = {
    readroles
}