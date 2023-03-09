import React, { useState } from "react";
import PropTypes from 'prop-types'

export const  Contador =({contador}) =>{

    const [valor, setValor] = useState(contador)


const handleAdd =( event)=>{
    setValor(valor +1)

}

const resta =( event)=>{
    setValor(valor -1)

}
const reset =( event)=>{
    setValor(contador)

}

    return(
        <div>
           <h1>Contador App</h1>
            <h2>{valor}</h2>
            <button onClick= {handleAdd}>
                +1
            </button>
            <button onClick= {resta}>
                -1
            </button>
            <button onClick= {reset}>
                reset
            </button>
        </div>
    )
}

Contador.propTypes={
    contador: PropTypes.number.isRequired
}

export default Contador