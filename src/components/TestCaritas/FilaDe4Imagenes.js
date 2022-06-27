import React from 'react'
import Image from './Image'
import './FilaDe4Imagenes.css'

const FilaDe4Imagenes = ({imagenes}) => {

  return (
    <div className='fila'>
    {imagenes.map((img) => {
      return <Image key={img.imagen} imagen={img.imagen} respuestaCorrecta={img.respuestaCorrecta} />
    })}
  </div>
  )
}

export default FilaDe4Imagenes