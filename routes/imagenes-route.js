const imagenes_controller = require('../controllers/imagenes-controller');
const express = require('express');
const app = express();

app.get('/imagenes-read', imagenes_controller.readimage);

module.exports = app;