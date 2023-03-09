import PropTypes from 'prop-types'

const Portada = ({title,fecha="1900"}) => {

    const nuevoMensaje = {
        mensaje: 'Hola Desarrollo Web I',
        title: 'Programación Web'
    }

  return (
    <div><h1>{title}</h1>
    <h3>{fecha}</h3>
    <h4>{nuevoMensaje.title}</h4></div>
  )
}
Portada.propTypes={
  titulo: PropTypes.string
}

export default Portada