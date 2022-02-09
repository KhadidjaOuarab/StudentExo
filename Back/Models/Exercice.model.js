// create exercice schema using mongoose
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const exerciceSchema = new Schema({
    guid: Number,
    title: {
        type: String,
        required: false,
    },
    description: String,
    dateExo: Date,
    duration: Number,
    level: String,
    students: [{type: Schema.Types.ObjectId, ref: "Student"}],

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Exercice", exerciceSchema);