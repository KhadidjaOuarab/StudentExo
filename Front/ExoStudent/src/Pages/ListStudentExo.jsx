import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { createBrowserHistory as history} from 'history';
//import studentController from '../../../../Back/Controllers/Student.Controllers';
function ListStudentExo() {
  const [student, setStudent] = useState([])
  const [exercice, setExercice] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/Students/AllStudents')
      .then(res => { setStudent(res.data) })

  }
    , [])


  useEffect(() => {
    axios.get('http://localhost:4000/Exercices/ExoOne')
      .then(res => { setExercice(res.data) })


  }
    , [])

  // const deleteExo = (e) => {
  //   console.log('====================================');
  //   console.log(e.target._id);
  //   console.log('====================================');
  //   axios.delete(`http://localhost:4000/Exercices/delete/${e.target._id}`)
  //     .then((res) => {
  //       console.log("fff")
  //     }).catch((error) => {
  //       console.log(error)
  //     });
  // }


  return <div>
    <table>
      <tbody>
        <tr>
          <th>Matricule</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Exercice</th>
        </tr>
        {student.map((ele) => (
          <tr key={ele._id}>
            <td>{ele.matricule}</td>
            <td>{ele.firstName}</td>
            <td>{ele.lastName}</td>
            <td>{ele.email}</td>
            <td>{ele.exercices}</td>
          </tr>

        ))}
      </tbody>
    </table>

    <table>
      <tbody>
        <tr>
          <th>Titre</th>
          <th>Description</th>
          <th>Date</th>
          <th>Level</th>
          <th>Duration</th>
          <th>Students</th>
        </tr>
        {exercice.map((ele) => (
          <tr key={ele._id}>
            <td>{ele.title}</td>
            <td>{ele.description}</td>
            <td>{ele.dateExo}</td>
            <td>{ele.duration}</td>
            <td>{ele.level}</td>

            <td><ul>{ele.students.map((ele) => (<li key={ele._id}> {ele.firstName} </li>))}</ul></td>
            <td><input type='submit' value='delete' onClick={() => {
              axios.delete(`http://localhost:4000/Exercices/delete/${ele._id}`)
                .then((res) => {
                  console.log("fff")
                }).catch((error) => {
                  console.log(error)
                });
            }} key={ele._id} /></td>


            <td><input type='submit' onClick={() => window.open("http://localhost:3000/UpdateExercice", "_blank")} value='Update' key={ele._id}  /></td>
          </tr>

        ))}
      </tbody>
    </table>

  </div>
}

export default ListStudentExo;
