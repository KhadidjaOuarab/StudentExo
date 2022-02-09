import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css';
function AddStudent() {
    const [student, setStudent] = useState({ firstName: '', lastName: '', matricule: '', group: '', email: '' })


    const printValue = (e) => {

        e.preventDefault()
        console.log('====================================');
        console.log(student);
        console.log('====================================');

        axios.post('http://localhost:4000/Students/create', student)
            .then((res) => {
                console.log("fff")
            }).catch((error) => {
                //  console.log(error)
            });


        setStudent({
            firstName: '', lastName: '', matricule: '', group: '', email: ''
        })

    }
    return <div>


        <form onSubmit={printValue} className='form'>
            <input placeholder='Matricule' value={student.matricule} type='text' onChange={(e) => { setStudent({ ...student, matricule: e.target.value }) }} />
            <input placeholder='Firstname' value={student.firstName}  type='text' onChange={(e) => { setStudent({ ...student, firstName: e.target.value }) }} />
            <input placeholder='Lastname' value={student.lastName}  type='text' onChange={(e) => { setStudent({ ...student, lastName: e.target.value }) }} />
            <input placeholder='Email' value={student.email}  type='text' onChange={(e) => { setStudent({ ...student, email: e.target.value }) }} />
            <input placeholder='Group' value={student.group}  type='text' onChange={(e) => { setStudent({ ...student, group: e.target.value }) }} />

            <input type='submit'></input>
        </form>


    </div>;
}

export default AddStudent;

