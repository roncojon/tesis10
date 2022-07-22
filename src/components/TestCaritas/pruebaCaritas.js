import React,{useEffect, useState} from 'react'
import imgs from '../../imgs';
import './PruebaCaritas.css'
import FilaDe4Imagenes from './FilaDe4Imagenes'
import {functionCaritas} from '../../functions/functionCaritas'

function PruebaCaritas() {
  let filaTemp = [];
  let filaTemp2 = [];
  let counter = 1;
  let counter2=0;

  const createFilas = () => {
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
  createFilas();

  const [tiempoAgotado,setTiempoAgotado] = useState(false);
  setTimeout(()=>setTiempoAgotado(true),3000);
//console.log(tiempoAgotado);
  const [resultadoDePrueba,setResultadoDePrueba] = useState([]);
const resultadosHandler = (fila,index)=>{ const resultTemp = resultadoDePrueba; resultTemp[index] = fila;setResultadoDePrueba(resultTemp);};

  //console.log(resultadoDePrueba);
  if (tiempoAgotado ===true) {
    console.log(functionCaritas(resultadoDePrueba));
  }
  useEffect(()=>{
    console.log('useEffect');
    const fetcha = ()=>
    fetch('https://localhost:44381/api/pruebadecaritas'
).then(response =>{return response.json()})
.then(resp => console.log(resp))

fetcha();
  },[tiempoAgotado])
  return (
    <div className='pCaritas'>
      {filaTemp2.map((fila) => {
        counter2++;
        //hasta ahora fila es un array de objetos {img,counter} sin clave
        //al parecer este array lo puedo trabajar como un objeto al pasarlo por props a
        //FilaDe4Imagenes para poder usar los valores ;)
        return <FilaDe4Imagenes key={`${fila[0].counter}`} imagenes={fila} numeroDeFila={counter2} onTiempoAgotado={resultadosHandler} timeAgotado={tiempoAgotado}/>
      })}

    </div>
  )
}

export default PruebaCaritas;