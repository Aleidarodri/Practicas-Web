import { useState } from "react";

export const Formulas = () => {
  const [cuadrado, setCuadrado] = useState({ base: 4, altura: 4, area: 0 });
  const [triangulo, setTriangulo] = useState({ base: 6, altura: 5, area: 0 });
  const [rectangulo, setRectangulo] = useState({ base: 5, altura: 10, area: 0 });

  const calcularAreaCuadrado = () => {
    const area = cuadrado.base * cuadrado.altura;
    setCuadrado({ ...cuadrado, area });


  };

  const calcularAreaTriangulo = () => {
    const area = (triangulo.base * triangulo.altura) / 2;
    setTriangulo({ ...triangulo, area });


  };

  const calcularAreaRectangulo = () => {
    const area = rectangulo.base * rectangulo.altura;
    setRectangulo({ ...rectangulo, area });


  };

  return (
    <div>
      Areas de Figuras
      <h2>Area del Cuadrado: {cuadrado.area}</h2>
      <button onClick={calcularAreaCuadrado}>Cuadrado</button>
      <h2>Area del Rectangulo: {rectangulo.area}</h2>
      <button onClick={calcularAreaRectangulo}>Rectangulo</button>
      <h2>Area del Triangulo: {triangulo.area}</h2>
      <button onClick={calcularAreaTriangulo}>Triangulo</button>
    </div>
    )
};
export default Formulas
