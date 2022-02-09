const express = require('express');
const routerStudent = express.Router();
const studentController = require('../Controllers/Student.Controllers');

routerStudent.get('/AllStudents', studentController.getAllStudents);
routerStudent.get('/:id', studentController.getSingleStudent);

routerStudent.post('/create', studentController.createStudent);
routerStudent.put('/update/:id', studentController.updatetSingleStudent);
routerStudent.delete('/delete/:id', studentController.deleteSingleStudent);

module.exports = routerStudent;