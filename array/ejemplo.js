const persona={
    nombre :`Alicia`,
    edad:40,
    ingresos:[100,500,1200,300]
}

const melanie={
    nombre :`Melanie`,
    edad:20,
    ingresos:[10,50,120,30]
}

const diego={
    nombre :`Diego`,
    edad:21,
    ingresos:[100,500,120,30]
}



// for(let i=0;i<persona.ingresos.length;i++)
// console.log(personas.ingresos[i])

// for(let ingresos of persona.ingresos)
// console.log(ingresos)

// for(let ingresos in persona.ingresos)
// console.log(ingresos)

// console.log(persona.nombre);
// persona.ingresos.forEach(ingresos=>{
//     console.log(ingresos)
// })


const lista =[melanie,diego,persona]
// lista.forEach(nombre=>{
//     console.log(nombre.nombre)
    // lista.map(persona=>
    //     console.log(persona.edad))
        let edades=lista.map(persona=>{
            return persona.edad

        })



