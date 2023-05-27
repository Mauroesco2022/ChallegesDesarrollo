const express = require('express')
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-token');
const { listarTarea, crearTarea, actualizarTarea, eliminarTarea } = require('../controllers/TareaController');

router.use(validarJWT)
router.get('/ListarTarea', listarTarea)
router.post('/creaarTarea', crearTarea)
router.put('/:id', actualizarTarea)
router.delete('/:id', eliminarTarea)
module.exports = router