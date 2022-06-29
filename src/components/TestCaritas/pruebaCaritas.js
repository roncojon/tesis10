import React from 'react'
import imgs from '../../imgs';
import './PruebaCaritas.css'
import FilaDe4Imagenes from './FilaDe4Imagenes'

function PruebaCaritas() {
  let filaTemp = [];
  let filaTemp2 = [];
  let counter = 1;
  let counter2=0;

  const createFilaHandler = () => {
    imgs.forEach(img => {
      if (counter % 4 !== 0) {
        filaTemp.push({img, counter});
      } else {
        filaTemp.push({img, counter});
        filaTemp2.push(filaTemp);
        filaTemp = [];
      }
      counter++;
    });
  }

  createFilaHandler();

  return (
    <div className='pCaritas'>
      {filaTemp2.map((fila) => {
        counter2++;
        //hasta ahora fila es un array de objetos {img,counter} sin clave
        //al parecer este array lo puedo trabajar como un objeto al pasarlo por props a
        //FilaDe4Imagenes para poder usar los valores ;)
        return <FilaDe4Imagenes key={`${fila[0].counter}`} imagenes={fila} numeroDeFila={counter2}/>
      })}

    </div>
  )
}

export default PruebaCaritas;