const user_controller = require('../controllers/usuario-controller');
const express = require('express');
const app = express();

app.get('/users.read', user_controller.read);
app.get('/users.readonne', user_controller.readOne);

module.exports = app;