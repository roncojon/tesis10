import React, {useState} from 'react'
import './Image.css'


function Modulo({ imagen, respuestaCorrecta, index, onRespuesta }) {
  const [singleResponse, setSingleResponse] = useState(true); 
const result = 0;

  const evaluacionHandler = (event) => {
    event.preventDefault();
    if (singleResponse) {
    console.log({
      img: event.target,
      imgsrc: imagen,
      target: event.target, id: event.target.id,
      correct: respuestaCorrecta
    });
      if (`${imagen}${respuestaCorrecta}` === event.target.id) {
        console.log("Respuesta CORRECTA");
        onRespuesta(1);
        setSingleResponse(false);
      }
      else {
        console.log("Respuesta Erronea");
        onRespuesta(2);
        setSingleResponse(false);
      }
    }
    
  }

  return (

    <div className="modulo">
      <img className="image" src={imagen} alt="Workplace" useMap={`#${imagen}`} />
      <map name={imagen}>
        <area className='ar' id={imagen + '1'} shape="rect" coords="0,0,66,80" alt="Computer" onClick={evaluacionHandler} />
        <area className='ar' id={imagen + '2'} shape="rect" coords="68,0,132,80" alt="Phone" onClick={evaluacionHandler} />
        <area className='ar' id={imagen + '3'} shape="rect" coords="134,0,200,80" alt="Coffee" onClick={evaluacionHandler} />
      </map>
    </div>
  )
}

export default Modulo;