// create express server
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();

const exercicesRouter = require("./Routers/Exercice.router")
const studentsRouter = require("./Routers/Student.router")

require("dotenv").config();
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
  res.send(`Server Express Connected on ${process.env.PORT}`);
});
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection
db.on('open', () =>  console.log(`connected to database mongodb  ${process.env.URL}`) )
//************************************** */
app.use('/Exercices',exercicesRouter)
app.use('/Students',studentsRouter)

//************************************** */
app.listen(process.env.PORT, () =>
  console.log(`server connected on port ${process.env.PORT}`)
);

