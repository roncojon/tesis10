import React from 'react'
import './Modulo.css'

function Modulo({ imagen, respuestaCorrecta }) {
  const evaluacionHandler = (event) => {
    event.preventDefault();
    console.log({
      img: event.target,
      imgsrc: imagen,
      target: event.target, id: event.target.id,
      correct: respuestaCorrecta
    });
    if (`${imagen}${respuestaCorrecta}` === event.target.id) {
      console.log("Respuesta CORRECTA");
    }
    else {
      console.log("Respuesta Erronea");
    }
  }

  return (

    <div className="modulo">
      <img src={imagen} alt="Workplace" useMap={`#${imagen}`} />
      <map name={imagen}>
        <area className='ar' id={imagen + '1'} shape="rect" coords="0,0,82,80" alt="Computer" onClick={evaluacionHandler} />
        <area className='ar' id={imagen + '2'} shape="rect" coords="84,0,166,80" alt="Phone" onClick={evaluacionHandler} />
        <area className='ar' id={imagen + '3'} shape="rect" coords="169,0,250,80" alt="Coffee" onClick={evaluacionHandler} />
      </map>
    </div>
  )
}

export default Modulo;