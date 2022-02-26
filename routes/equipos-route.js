const equipos_controller = require('../controllers/equipos-controller');
const express = require('express');
const app = express();

app.get('/equipos.readequipos', equipos_controller.readequipos);

module.exports = app;