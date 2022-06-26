import React from 'react'
import  imgs  from '../../imgs';
import Modulo from './Modulo'
import './PruebaCaritas.css'

function PruebaCaritas() {
  return (
    <div className='pCaritas'>
      {imgs.map((img) => {
        return <Modulo key={img.imagen} imagen={img.imagen} respuestaCorrecta={img.respuestaCorrecta} />
      })}
    </div>
  )
}

export default PruebaCaritas;