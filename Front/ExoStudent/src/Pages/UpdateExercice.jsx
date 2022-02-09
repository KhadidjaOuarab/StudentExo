import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css';
function AddExercice() {
    const [exercice, setExercice] = useState({
        guid: '',
        title: '',
        description: '',
        dateExo: '',
        duration: '',
        level: '',
        students: [{}]
    })



  
    useEffect(() => {
        axios.get('http://localhost:4000/Exercices/ExoOne')
          .then(res => { setExercice(res.data) })
    
    
      }
        , [])



}
return <div>
    <form onSubmit={printValue} className='form'>
        <input placeholder='guid' value={exercice.guid} type='text' onChange={(e) => { setExercice({ ...exercice, guid: e.target.value }) }} />
        <input placeholder='title' value={exercice.title} type='text' onChange={(e) => { setExercice({ ...exercice, title: e.target.value }) }} />
        <input placeholder='description' value={exercice.description} type='text' onChange={(e) => { setExercice({ ...exercice, description: e.target.value }) }} />
        <input placeholder='dateExo' value={exercice.dateExo} type='text' onChange={(e) => { setExercice({ ...exercice, dateExo: e.target.value }) }} />
        <input placeholder='duration' value={exercice.duration} type='text' onChange={(e) => { setExercice({ ...exercice, duration: e.target.value }) }} />
        <input placeholder='level' value={exercice.level} type='text' onChange={(e) => { setExercice({ ...exercice, level: e.target.value }) }} />
        <input placeholder='level' value={exercice.level} type='text' onChange={(e) => { setExercice({ ...exercice, level: e.target.value }) }} />

        {/* <select onChange={yourChangeHandler} id="ddlProducts" name="ddProducts">
                {student.map((ele) => (<option key={ele._id} value={ele._id}> {ele.email} </option>))}

            </select> */}

        <input type='submit'>Update</input>
    </form>


</div>;
}

export default AddExercice;

