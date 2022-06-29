import React from 'react'
import './Image.css'

function Modulo({ imagen, respuestaCorrecta, index, onAddRespCorrecta }) {

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
      onAddRespCorrecta();
    }
    else {
      console.log("Respuesta Erronea");
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