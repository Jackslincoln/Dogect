const express = require("express");
const usersRouter = require('./usuario-route');
const manadasRouter = require('./manada-route');
const equiposRouter = require('./equipos-route');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/manadas', manadasRouter);
  router.use('/equipos', equiposRouter);
}

module.exports = routerApi;
