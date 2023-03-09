import React, { useState } from 'react'

const Formulario =({estudiante,estudiantes,setEstudiantes})=> {

  const [nombre,setNombre] =useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [promedio, setPromedio] = useState('');
  const [error, setError] = useState(false)





  const manejadorSubmit = (e)=>{
    e.preventDefault();
    console.log("enviando datos")
    if([nombre.trim(),carrera.trim(),semestre.trim(),promedio.trim()].includes('')){
      console.log('No se permiten vacios')
      setError(true);
      return;
    } 
      setError(false);
      const objetoEstudiante ={
        nombre,carrera,semestre,promedio
      }
    
      setEstudiantes([...estudiantes,objetoEstudiante])
      limpiar();
  }
 const limpiar=()=>{
  setNombre('');
  setCarrera('');
  setSemestre('');
  setPromedio('');

 }



  return (



    <div className=' p-[20px] md:w-1/2 lg:w-2/5 bg-pink-400 rounded '>
   <h1 className='font-bold text-center text-xl'>Registro Formulario</h1>
    <form  onSubmit={manejadorSubmit}>


      {error && (<div className='bg-sky-400 text-center font-thin'><p>LLenar todos los campos</p></div>)}
      <div >
      <label className='block mb-1 mt-10'>Nombre </label>
        <input type="text" placeholder='nombre' className='border-2 p-1 w-full rounded-md mb-4' 
        value={nombre}
        onChange= { (e) => {setNombre(e.target.value)}}/>
      </div>
      <div>
      <label className='block mb-1 '>Carrera </label>
        <input type="text" placeholder='Carrera' className='border-2 p-1 w-full rounded-md mb-4'
         value={carrera}
         onChange= { (e) => {setCarrera(e.target.value)}}/>
      </div>
      <div>
      <label className='block mb-1'>Semestre </label>
        <input type="text" placeholder=' Semestre' className='border-2 p-1 w-full rounded-md mb-4'
         value={semestre}
         onChange= { (e) => {setSemestre(e.target.value)}}/>
      </div>
      <div>
      <label className='block mb-1 '>Promedio </label>
        <input type="text" placeholder='Promedio' className='border-2 p-1 w-full rounded-md mb-4'
         value={promedio}
         onChange= { (e) => {setPromedio(e.target.value)}}/>
      </div>


<div>
  <input type="submit"
  className='bg-white w-ful rounded-md p-2 hover:bg-fuchsia-600 cursor-pointer' value='agregar estudiante'
  />
</div>

    </form>

    </div>
  )
}

export default Formulario