const roles_controller = require('../controllers/roles-controller');
const express = require('express');
const app = express();

app.get('/roles.read', roles_controller.readroles);
app.get('/roles.readOneRole', roles_controller.readOneRole);

module.exports = app;