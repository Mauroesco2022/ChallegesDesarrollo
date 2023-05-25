const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const {validarcampos} = require('../middlewares/validar-campos');

router.post('/', loginUsuario)

router.post('/new',
[
    check('name','el nombre es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').not().isEmpty(),
    check('password', ).isLenght({min: 6}),
    validarcampos
],
crearUsuario
)
router.get('/renew', revalidarToken )

module.exports = router;