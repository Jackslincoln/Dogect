const roles_controller = require('../controllers/roles-controller');
const express = require('express');
const app = express();

app.get('/roles.read', roles_controller.readroles);

module.exports = app;