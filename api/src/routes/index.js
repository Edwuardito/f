const { Router } = require('express');
const { getRecipeById } = require('../controllers/getRecipeById')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/recipe/:id',(req,res) => {
    getRecipeById(req,res)
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
