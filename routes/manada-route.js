//const manada_controller = require('../controllers/manada-controller');
//const app = express();

const ManadaService = require('../service/usuario-service');
const service = new ManadaService;
const express = require('express');

const router = express.Router();


//app.get('/manada.readmanada', manada_controller.readmanada);

//CREATE MANADA
router.post('/', (req,res) => {
  const body = req.body;
  const manada = service.create(body);
  res.json({
    'success': true,
    'message': 'Manada creada exitosamente',
    'data': manada
  });
});

//GET MANADAS BY ID
router.get('/:id', (req,res, next) => {
  try {
    const {id} = req.params;
    const manadas = service.findOne(id);
    res.json({
      'success': true,
      'message': 'Estas son las manadas',
      'data': manadas
    });
  } catch(error) {
    next(error);
  }

});

module.exports = router;