import React, { useState, useContext, useCallback, useEffect } from 'react'
import Image from './Image'
import './FilaDe4Imagenes.css'
import PruebaCaritasContext from '../../PruebaCaritasContext';


const FilaDe4Imagenes = ({ imagenes: imagenesPlusIndex ,numeroDeFila, timeAgotado,onTiempoAgotado}) => {
  //console.log(numeroDeFila);
  const [respCorrectasCounter, setRespCorrectasCounter] = useState(0);
  const [respIncorrectasCounter, setRespIncorrectasCounter] = useState(0);
  //const [tiempoAgotado,setTiempoAgotado] = useState(timeAgotado);
  /* const [omisionesCounter, setOMisionesCounter] = useState(0);
  const [imgCounter, setImgCounter] = useState(0); */
//console.log(onTiempoAgotado);
//console.log(timeAgotado);
  const resultadoTemp = [/* { imagenIndex: 0, anotacion: false, error: false } */];

  const numerosDeImagenes = [];
  const llenarNumerosDeImagenes = () => {
    imagenesPlusIndex.forEach(element => {
      numerosDeImagenes.push(element.counter);
    });
  };
  llenarNumerosDeImagenes();

  const llenarIndexes = () => { numerosDeImagenes.map((imgNumber) => resultadoTemp.push({ imagenIndex: imgNumber, anotacion: false, error: false })) };
  llenarIndexes();

  const [resultado, setResultado] = useState(resultadoTemp);

  //const { prueba } = useContext(PruebaCaritasContext);

  const respuestaHandler = (respuesta) => {
    const response = respuesta[0];
    const arrayPosition = respuesta[1];
    const res = resultado;
    res[arrayPosition] = respuesta[0];
    console.log(res);
    setResultado(res);
  }
  //const counterIncorrectasHandler = () => { };
  const counterOmisionesHandler = () => { };

  const ImagePopulate = imagenesPlusIndex.map((ima) => {
    return <Image
      key={ima.img.imagen}
      imagen={ima.img.imagen}
      respuestaCorrecta={ima.img.respuestaCorrecta}
      index={ima.counter}
      onRespuesta={respuestaHandler} />
  });

  //console.log(tiempoAgotado)
 // if (tiempoAgotado===true){console.log(resultado);onTiempoAgotado(resultado);setTiempoAgotado(false)}
  useEffect(() => {
    //console.log(resultado);
    onTiempoAgotado(resultado,numeroDeFila-1)
  }, [timeAgotado])
  
/* const gooo = useCallback(
  () => {
    console.log(resultado);
    onTiempoAgotado(resultado);
  },
  [tiempoAgotado]
)
gooo(); */
  return (
    <div className='fila'>
      {ImagePopulate}
    </div>
  )
}

export default FilaDe4Imagenes