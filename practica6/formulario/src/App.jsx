import { Component, useEffect, useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  //es para tener la lists de estudiantes
  const [estudiantes, setEstudiantes] = useState([]);

  //aqui se almacena el estudiante a modificar
  const[estudiante,setEstudiante]=useState({});

  return (
   <div className='container mx-auto'>
   <Header/>
   <div className='mt-12 md:flex gap-3'>
   <Formulario
   estudiantes={estudiantes}
   setEstudiantes={setEstudiantes}
   estudiante={estudiante}
   />

   <Listado  estudiantes={estudiantes}
   setEstudiante={setEstudiante}
   
   />

   </div>

   </div>
  )
}

export default App
