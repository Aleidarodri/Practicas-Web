import React from 'react'
import Estudiante from './estudiantes'

const Listado =({estudiantes,setEstudiante})=> {
  {console.log(estudiantes)}
  return (
    <div className=' p-[20px] md:w-1/2 lg:w-3/5 bg-purple-600 rounded h-screen  md:overflow-y-scroll'>
      <h1 className='font-bold text-center text-xl' >  Listado de estudiante </h1>


    {
      estudiantes.map((estudiante,key)=>
      <Estudiante key={key} estudiante={estudiante}setEstudiante={setEstudiante}/>
      )
    }







    </div>

    )




}

export default Listado