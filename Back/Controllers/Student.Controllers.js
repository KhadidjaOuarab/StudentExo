const Student = require("../Models/Student.model");
const studentController = {};//pour pouvoir exporter tout a la fois
const Exercice = require("../Models/Exercice.model")

studentController.createStudent = async function (req, res)  {
  const {matricule,firstName, lastName, group,email } = req.body

  const student = new Student({
    matricule ,
    firstName,
    lastName,
    group,
    email

  });
  try {
    await student.save();

    res.status(201).json({
      message: "student created successfully",
      student,
    });
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    res.status(500).json({
      message: "Error occured while creating exercice",
      error,
    });
  }
};


studentController.getAllStudents = async function (req, res) {
  console.log("GET /getAllStudents");
  let students;
  try {
    students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

studentController.getSingleStudent = async function (req, res) {
  console.log("GET /getSingleStudent/:id");
  let student;
  try {
   // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    student = await Student.findById({ id : req.params.id});
    res.send(student);//}
  } catch (error) {
    res.status(500).send(error);
  }
};


studentController.updatetSingleStudent = async function (req, res) {
  console.log("GET /updatetSingleStudent/:id");
  let student;
  try {
    student = await Student.findOneAndUpdate({matricule : req.params.matricule}, {$set: req.body}, {new : true} );
    if (student){
    res.send(student);}
  } catch (error) {
    res.status(500).send(error);
  }
};


studentController.deleteSingleStudent = async function (req, res) {
  console.log("GET /deleteSingleStudent/:id");
  let student;
  try {
    student = await Student.findOneAndDelete({matricule : req.params.matricule} );
    if (student){
    res.send(student);}
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = studentController;