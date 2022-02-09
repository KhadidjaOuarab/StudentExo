import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AddStudent from './Pages/AddStudent'
import AddExercice from './Pages/AddExercice'
import Menu from './Components/Menu'
import Home from './Pages/Home'
import ListStudent from './Pages/ListStudentExo'
//import DeleteExercice from './Pages/DeleteExercice'
import {Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="1">
     
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AddStudent" element={<AddStudent />} />
        <Route path="AddExercice" element={<AddExercice />} />
        <Route path="ListStudent" element={<ListStudent />} />
        {/* <Route path="DeleteExercice" element={<DeleteExercice />} />
        <Route path="UpdateExercice" element={<AddStudent />} /> */}
      </Routes>
    </div>
  )
}

export default App
