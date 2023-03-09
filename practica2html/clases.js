// // class Persona{    

// //     constructor(nombre,apellido){
// //         this.nombre=nombre;
// //         this.apellido=apellido;
// //     }
// //     quienSoy(){
// //         console.log(`Hola me llamo ${this.nombre}${this.apellido}`)

// //     }
// // }
// // const merik =new Persona('Merik',' X');
// // merik.quienSoy();

// class Animal{
//     constructor(nombre){
//         this.velocidad=0;
//         this.nombre =nombre;
//     }
//     empezoAmoverse(velocidad){
//         this.velocidad=velocidad;
//         return `${this.nombre} se mueve con una velocidad de ${this.velocidad}km/h. `;
//     }
//     seDetuvo(){
//         this.velocidad=0;
//         return `${this.nombre} se detuvoy ahora esta sentado mirandote`;

//     }
// }
// // let animal = new Animal(`animal`);
// // console.log(animal.empezoAmoverse(20));
// // console.log(animal.seDetuvo());

// class Perro extends Animal{
//     ladrar(){
//         return `${this.nombre} esta ladrando`;
//     }
// }

// const chokys = new Perro(`Chokys`);
// console.log(chokys.ladrar());
// console.log (chokys.empezoAmoverse(5));
// console.log(chokys.seDetuvo);


// class Persona{
//     constructor(nombre,apellido){
//         this.nombre=nombre;
//         this.apellido=apellido;
//     }
//     get nombreCompleto(){
//         return`${this.nombre}${this.apellido}`
//     }
// }

// const merik =new Persona(`Merik`,` Meza`);
// const nombreActriz = merik.nombreCompleto;
// console.log(`el nombre de la actriz es ${nombreActriz}`);


// class Persona{
//     constructor(nombre,apellido){
//         this.nombre=nombre;
//         this.apellido=apellido;
//     }
//     get nombreCompleto(){
//         return`${this.nombre}${this.apellido}`
//     }
//     set nombreCompleto(nombre){
//         const partes =nombre.split(' ');
//         this.nombre = partes[0];
//         this.apellido= partes[1];
//     }
// }

// const merik =new Persona(`Merik`,` Meza`);
// const nombreActriz = merik.nombreCompleto;
// console.log(`el nombre de la actriz es ${nombreActriz}`);

// const gio = new Persona();
// gio.nombreCompleto = `Giovany Bonilla`;
//  const  estudiantes = gio.nombreCompleto;
// console.log(estudiantes);

// const objetoDePrueba={
//     nombre: `Merik`,
//     get nombreUsuario(){
//         return this.nombre;
//     },
//     set nombreUsuario(nuevoNombre){
//         this.nombre=nuevoNombre;
//     }
// }
// console.log(objetoDePrueba.nombreUsuario);
// console.log(objetoDePrueba)
// objetoDePrueba.nombreUsuario = `Giovany`;
// console.log(objetoDePrueba.nombreUsuario);
// console.log(objetoDePrueba);

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     static staticPropety =`holi...`;
//     static staticMethod(){
//         console.log(this.name);
//     }

// }
// const ulloa = new User(`Ulloa`);
// console.log(User.staticPropety);

// class Animal{
//     constructor(nombre){
//         this.velocidad=0;
//         this.nombre =nombre;
//     }
//     empezoAmoverse(velocidad){
//         this.velocidad=velocidad;
//         return `${this.nombre} se mueve con una velocidad de ${this.velocidad}km/h. `;
//     }
//     seDetuvo(){
//         this.velocidad=0;
//         console.log (`${this.nombre} se detuvo y ahora esta sentado mirandote`);

//     }
// }
// class Perro extends Animal{
//     ladrar(){
//         return `${this.nombre}esta ladrando`
//     }
//     seDetuvo(){
//         super.seDetuvo();
//          console.log(`y se esta lamiendo`);
         
//     }

// }

// const perro = new Perro('chokys');
// perro.seDetuvo();

// 'use strict'
// // mensaje = `Hola es un mensaje de prueba`;
// // console.log(mensaje)

// a=10;
// let sumarDos=function(){
//     //'use strict';
//       b=15;
//     return a +b;
// }
//  let resultado = sumarDos();
//  console.log(resultado);

'use strict'

function nuevoMensaje(){
    console.log(this === undefined)
}
const nuevoMensaje2= () =>{
    console.log(this === undefined)
}

