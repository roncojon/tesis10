import React, { useState } from 'react'
import Image from './Image'
import './FilaDe4Imagenes.css'

const FilaDe4Imagenes = ({ imagenes: imagenesPlusIndex }) => {
  const [respCorrectasCounter, setRespCorrectasCounter] = useState(0);
  const [respIncorrectasCounter, setRespIncorrectasCounter] = useState(0);
  const [omisionesCounter, setOMisionesCounter] = useState(0);
  const [imgCounter, setImgCounter] = useState(0);

  const counterCorrectasHandler = () => { setRespCorrectasCounter((prevState) => { return prevState + 1 }) };
  const counterIncorrectasHandler = () => { };
  const counterOmisionesHandler = () => { };

  const ImagePopulate = imagenesPlusIndex.map((ima) => {
    return <Image
      key={ima.img.imagen}
      imagen={ima.img.imagen}
      respuestaCorrecta={ima.img.respuestaCorrecta}
      index={ima.counter}
      onAddRespCorrecta={counterCorrectasHandler} />
  });

  return (
    <div className='fila'>
      {ImagePopulate}
    </div>
  )
}

export default FilaDe4Imagenes