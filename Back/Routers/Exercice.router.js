const express = require('express');
const routerExercice = express.Router();
const exerciceController = require('../Controllers/Exercice.Controllers');

routerExercice.get('/AllExercices', exerciceController.getAllExercices);
//routerExercice.get('/:id', exerciceController.getSingleExercice);

routerExercice.post('/create', exerciceController.createExercice);
routerExercice.get('/ExoOne', exerciceController.getOne);
routerExercice.put('/update/:id', exerciceController.updatetSingleExercice);
routerExercice.delete('/delete/:id', exerciceController.deleteSingleExercice);

module.exports = routerExercice;