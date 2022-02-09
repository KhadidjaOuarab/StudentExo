const Exercice = require("../Models/Exercice.model")
const exerciceController = {};
const Student = require("../Models/Student.model")

exerciceController.createExercice = async function (req, res) {
  const {guid,title, description, dateExo, duration,level,students} = req.body 
  const exercice = new Exercice({
    guid,
    title,
    description,
    dateExo,
    duration,
    level ,
    students

  });
  try {
   
    await exercice.save();
   
    res.status(201).json({
      message: "exercice created successfully",
      exercice,
    });
  } catch (error) {
     res.status(500).json({
      message: "Error occured while creating exercice",
      error: error
    });
  }
};


exerciceController.getAllExercices = async function (req, res) {
  console.log("GET /getAllExercices");
  let exercices;
  try {
    exercices = await Exercice.find();
    res.send(exercices);
  } catch (error) {
    res.status(500).send(error);
  }
};

exerciceController.getExercicePlusStudent  = async function (req, res) {
  console.log("GET /getExercicePlusStudent");
  try {
   // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
   const exo = await Exercice.findById(req.params.id).populate("students")
    res.json(exo);//}
  } catch (error) {
    res.status(500).send(error);
  }
};

exerciceController.getOne = async function (req,res) {
  // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    try{ 
    const exo = await Exercice.find().populate("students")
     res.send(exo)
   } catch (error) {
     res.status(500).send(error);
     console.log(error)
   }

}
exerciceController.getSingleExercice = async function (req, res) {
  console.log("getSingleExercice");
  let exercice;
  try {
   // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    exercice = await Exercice.find({ guid : req.params.guid});
    res.send(exercice);//}
  } catch (error) {
    res.status(500).send(error);
  }
};


exerciceController.updatetSingleExercice = async function (req, res) {
  console.log("GET /updatetSingleExercice/:id");
  let exercice;
  try {
    exercice = await Exercice.findByIdAndUpdate( req.params.guid, {$set: req.body}, {new : true} );
    if (exercice){
    res.send(exercice);}
  } catch (error) {
    res.status(500).send(error);
  }
};


exerciceController.deleteSingleExercice = async function (req, res) {
  console.log("GET /deleteSingleExercice/:id");
  let exercice;
  try {
    exercice = await Exercice.findByIdAndDelete(req.params.id);
    if (exercice){
   res.send(exercice);}
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = exerciceController;