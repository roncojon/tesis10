import React from 'react'
import  imgs  from '../../imgs';
import './PruebaCaritas.css'
import FilaDe4Imagenes from './FilaDe4Imagenes'

function PruebaCaritas() {
  let filaTemp= [];
  let filaTemp2 = [];
  let counter= 1;

const createFilaHandler = ()=> {
  imgs.forEach(img => {
    if (counter %4 !== 0) {
      filaTemp.push(img);
    } else {
      filaTemp.push(img);
      filaTemp2.push(filaTemp);
      filaTemp =[]; 
    }
    counter++;
  });
  console.log(filaTemp2);
}

createFilaHandler();

  return (
    <div className='pCaritas'>
      {filaTemp2.map((fila) => {
        return <FilaDe4Imagenes imagenes={fila}/>
      })}

    </div>
  )
}

export default PruebaCaritas;