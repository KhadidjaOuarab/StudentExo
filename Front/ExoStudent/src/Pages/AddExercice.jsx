import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css';
function AddExercice() {
    const [student, setStudent] = useState([])
    const [exercice, setExercice] = useState({
        guid: '',
        title: '',
        description: '',
        dateExo: '',
        duration: '',
        level: '',
        students: [{}]
    })


    const printValue = (e) => {

        e.preventDefault()
        console.log('====================================');
        console.log(exercice);
        console.log('====================================');

        axios.post('http://localhost:4000/Exercices/create', exercice)
            .then((res) => {
                console.log("fff")
            }).catch((error) => {
                console.log(error.value)
            });

        setExercice({
            guid: '',
            title: '',
            description: '',
            dateExo: '',
            duration: '',
            level: '',
            students: [{}]
        })


    }

    useEffect(() => {
        axios.get('http://localhost:4000/Students/AllStudents')
            .then(res => { setStudent(res.data) })

    }
        , [])

    function yourChangeHandler(event) {
        //alert(event.target.value)
        console.log('*************************************');
        console.log(event.target.value);
        console.log('*************************************');
        setExercice({ ...exercice, students: [event.target.value] })
        console.log('====================================');
        console.log(exercice);
        console.log('====================================');
    }
    return <div>
        <form onSubmit={printValue} className='form'>
            <input placeholder='guid' value={exercice.guid} type='text' onChange={(e) => { setExercice({ ...exercice, guid: e.target.value }) }} />
            <input placeholder='title' value={exercice.title} type='text' onChange={(e) => { setExercice({ ...exercice, title: e.target.value }) }} />
            <input placeholder='description' value={exercice.description} type='text' onChange={(e) => { setExercice({ ...exercice, description: e.target.value }) }} />
            <input placeholder='dateExo' value={exercice.dateExo} type='text' onChange={(e) => { setExercice({ ...exercice, dateExo: e.target.value }) }} />
            <input placeholder='duration' value={exercice.duration} type='text' onChange={(e) => { setExercice({ ...exercice, duration: e.target.value }) }} />
            <input placeholder='level' value={exercice.level} type='text' onChange={(e) => { setExercice({ ...exercice, level: e.target.value }) }} />

            <select onChange={yourChangeHandler} id="ddlProducts" name="ddProducts">
                {student.map((ele) => (<option key={ele._id} value={ele._id}> {ele.email} </option>))}

            </select>

            <input type='submit'></input>
        </form>


    </div>;
}

export default AddExercice;

