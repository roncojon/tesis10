import React from 'react'
import Image from './Image'

const FilaDe4Imagenes = ({props}) => {
  return (
    <div className='fila'>
    {imgs.map((img) => {
      return <Image key={img.imagen} imagen={img.imagen} respuestaCorrecta={img.respuestaCorrecta} />
    })}
  </div>
  )
}

export default FilaDe4Imagenes