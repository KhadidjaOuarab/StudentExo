// create exercice schema using mongoose
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    matricule: String,
    firstName: String,
    lastName: String,
    email: String,
    group: String,
    exercices : [{type: Schema.Types.ObjectId, ref: "Exercice"}]

});

module.exports = mongoose.model("Student", studentSchema);