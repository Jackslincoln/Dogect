const manada_controller = require('../controllers/manada-controller');
const express = require('express');
const app = express();

app.get('/manada.readmanada', manada_controller.readmanada);

module.exports = app;