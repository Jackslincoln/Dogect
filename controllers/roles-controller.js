const roles_service = require('../service/roles-service');


async function readroles(req, res){
    const roles = await roles_service.read();
    res.json(roles);
}

module.exports = {
    readroles
}