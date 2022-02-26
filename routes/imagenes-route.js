const imagenes_controller = require('../controllers/imagenes-controller');
const express = require('express');
const app = express();

app.get('/imagenes.readimage', imagenes_controller.readimage);
app.get('/imagenes.readOneImg', imagenes_controller.readOneImg);

module.exports = app;