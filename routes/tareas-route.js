const tareas_controller = require('../controllers/tareas-controller');
const express = require('express');
const app = express();

app.get('/tareas.readtareas', tareas_controller.readtareas);

module.exports = app;