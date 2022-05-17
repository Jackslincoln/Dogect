const express = require('express');
const RoleService = require('../service/roles-service');
const service = new RoleService;
const validatorHandler = require('./../middlewares/validator.handler');
const {createRoleDto, updateRoleDto, getRoleId} = require('../dtos/roles.dto');

const router = express.Router();

////GET ALL ROLES
router.get('/', (req, res, next) => {
  try {
    const {size} = req.query
    const roles = service.find(size || 10)
    res.json({
      'success': true,
      'message': 'Estos son los roles encontrados',
      'Data': roles
    });
  } catch(error) {
    next(error);
  }
});

//CREATE ROLE
router.post('/', validatorHandler(createRoleDto, 'body'), (req,res) => {
  const body = req.body;
  const role = service.create(body);
  res.json({
    'success': true,
    'message': 'Rol creado exitosamente',
    'data': role
  });
});

//GET ROLE BY ID
router.get('/:id', (req,res, next) => {
  try {
    const {id} = req.params;
    const role = service.findOne(id);
    res.json({
      'success': true,
      'message': 'Este es el rol encontrado',
      'data': role
    });
  } catch(error) {
    next(error);
  }
});

//UPDATE ROLE
router.patch('/:id', validatorHandler(getRoleId, 'params'), validatorHandler(updateRoleDto, 'body'), (req,res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const {old, changed} = service.update(id, body);
    res.json({
      'success': true,
      'message': 'Se ha actualizado el siguiente registro.',
      'data': {
        "original": old,
        "modified": changed
      }
    });
  } catch(error) {
    next(error)
  }
});

//DELETE ROLE
router.delete('/:id', validatorHandler(getRoleId, 'params'), (req,res, next) => {
  try {
    const { id } = req.params;
    const role = service.delete(id);
    res.json({
      'success': true,
      'message': 'El siguiennte registro ha sido eliminado correctamente',
      'data': role
    });
  } catch(error) {
    next(error)
  }
});

module.exports = router;


// const roles_controller = require('../controllers/roles-controller');
// const app = express();

// app.get('/roles.read', roles_controller.readroles);
// app.get('/roles.readOneRole', roles_controller.readOneRole);

// module.exports = app;
