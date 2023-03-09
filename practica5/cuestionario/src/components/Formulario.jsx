import React from 'react'
// import '../style/formularioStyle.css'

const formulario = () => {
  return (
    <div className='container'> 
    <h1>FORMULARIO</h1>
    <form>
        <label htmlFor=''>Nombre:</label>
        <br/>
        <input type='text'></input>
        <br/>
        <label htmlFor=''>Apellido:</label>
        <br/>
        <input type='text'></input>
        <br/>
        <label htmlFor=''>Genero:</label>
        <br/>
        <input type='text'></input>
        <br/>
        <label htmlFor=''>Telefono:</label>
        <br/>
        <input type='text'></input>
        <br/>
        <label htmlFor=''>Edad:</label>
        <br/>
        <input type='text'></input>
        <br/>
        <br/>
        <input type="button" value='enviar'/>

    </form>

    </div>

  )
}

export default formulario