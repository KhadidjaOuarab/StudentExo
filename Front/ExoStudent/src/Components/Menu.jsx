import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
  return <div >

    <ul  >
      <Link to="/">Home</Link>
      <Link to="AddStudent">Add Student</Link>
      <Link to="AddExercice">Add Exercice</Link>
      <Link to="ListStudent">List Student</Link>
      <Link to="DeleteExercice">Delete Exercice</Link>
      <Link to="UpdateExercice">Update Exercice</Link>
    </ul>

  </div>;
}

export default Menu;
