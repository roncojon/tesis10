import React, { useState, useContext } from 'react'
import Image from './Image'
import './FilaDe4Imagenes.css'
import PruebaCaritasContext from '../../PruebaCaritasContext';


const FilaDe4Imagenes = ({ imagenes: imagenesPlusIndex }) => {
  const [respCorrectasCounter, setRespCorrectasCounter] = useState(0);
  const [respIncorrectasCounter, setRespIncorrectasCounter] = useState(0);
  /* const [omisionesCounter, setOMisionesCounter] = useState(0);
  const [imgCounter, setImgCounter] = useState(0); */

  const numerosDeImagenesTemp = [];
  const numerosDeImagenes = () => {
    imagenesPlusIndex.forEach(element => {
      numerosDeImagenesTemp.push(element.counter);
    });
  };

  numerosDeImagenes();
  console.log(numerosDeImagenesTemp);
  const { prueba } = useContext(PruebaCaritasContext);

  const respuestaHandler = (respuesta) => {
    if (respuesta) {
      setRespCorrectasCounter((prevState) => { return prevState + 1 })
    }
    else {
      setRespIncorrectasCounter((prevState) => { return prevState + 1 })
    };
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

  return (
    <div className='fila'>
      {ImagePopulate}
    </div>
  )
}

export default FilaDe4Imagenes