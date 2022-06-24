import React from 'react'
import { imgs } from '../../imgs';
import Modulo from './modulo';

function PruebaCaritas() {
  return (
    <div>
      {imgs.map((img, index) => {
        return <Modulo key={index} imagen={img.img} respuestaCorrecta={img.correctAnswer} />
      })}
    </div>
  )
}

export default PruebaCaritas;