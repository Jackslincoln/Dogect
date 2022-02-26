const huesos_controller = require('../controllers/huesos-controller');
const express = require('express');
const app = express();

app.get('/huesos.readhueso', huesos_controller.readhueso);

module.exports = app;