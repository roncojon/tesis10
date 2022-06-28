import React, { useState } from 'react'
import Image from './Image'
import './FilaDe4Imagenes.css'

const FilaDe4Imagenes = ({ imagenes }) => {
  const [respCorrectasCounter, setRespCorrectasCounter] = useState(0);
  const [respIncorrectasCounter, setRespIncorrectasCounter] = useState(0);
  const [omisionesCounter, setOMisionesCounter] = useState(0);
  const [imgCounter, setImgCounter] = useState(0);

  const counterCorrectasHandler = () => {setRespCorrectasCounter((prevState)=>{return prevState+1})};
  const counterIncorrectasHandler = () => { };
  const counterOmisionesHandler = () => { };

  const ImagePopulate = imagenes.map((img) => {
    return <Image key={img.imagen} imagen={img.imagen} respuestaCorrecta={img.respuestaCorrecta} onAddRespCorrecta={counterCorrectasHandler}/>
  });

  return (
    <div className='fila'>
      {ImagePopulate}
    </div>
  )
}

export default FilaDe4Imagenes