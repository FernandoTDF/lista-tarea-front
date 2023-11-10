import React, { useState, useEffect } from "react";

const Lista = () => {

  const [personas, setPersonas] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/lista')
    .then(resp => resp.json())
    .then(data => setPersonas(data))
    .catch(error => {
      console.log('nos e pudo obtener las persnas', error)
    });
  },[])


  //const personas = ["Leandro","Jorge","Gaston","Emilio"]

  return(
    <>
      <h1>Personas</h1>
        <ul>
          {personas.map( (persona, index) => 
            <li key={index}>{persona.nombre} - {persona.apellido} - {persona.nacionalidad}</li>
          )}
        </ul>
    </>
  )


}

export default Lista;