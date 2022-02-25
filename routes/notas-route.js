const notas_controller = require('../controllers/notas-controller');
const express = require('express');
const app = express();

app.get('/notas.readnotes', notas_controller.readnotes);

module.exports = app;