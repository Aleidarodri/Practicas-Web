import React from 'react'

const Estudiantes = ({estudiante,setEstudiante})=> {
  const {nombre,carrera,semestre,promedio}=estudiante
  return (
    <div className=' py-5 rounded-md shadow-lg bg-purple-500 '>

    <p className='font-bold mb-2 uppercase'>Nombre: <span className='font-normal  normal-case ml-3'>{nombre}</span></p>
    <p className='font-bold mb-2 uppercase'>Carrera: <span className='font-normal  normal-case ml-3'>{carrera}</span></p>
    <p className='font-bold mb-2 uppercase'>Semestre: <span className='font-normal  normal-case ml-3'>{semestre}</span></p>
    <p className='font-bold mb-2 uppercase'>Promedio: <span className='font-normal  normal-case ml-3'>{promedio}</span></p> 

      <div>
       <button type='button' className='p-2 text-black bg-pink-300'
       onClick={()=>setEstudiante(estudiante)}>
        Editar
       </button>
      </div>
      <div>
       <button type='button' className='p-3 text-black bg-blue-400'>
        Eliminar
       </button>
      </div>

      </div>
  )
}

export default Estudiantes
