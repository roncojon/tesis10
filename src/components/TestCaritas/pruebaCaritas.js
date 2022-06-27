import React from 'react'
import  imgs  from '../../imgs';
import Image from './Image'
import './PruebaCaritas.css'

function PruebaCaritas() {
  return (
    <div className='pCaritas'>
      {imgs.map((img) => {
        return <Image key={img.imagen} imagen={img.imagen} respuestaCorrecta={img.respuestaCorrecta} />
      })}
    </div>
  )
}

export default PruebaCaritas;