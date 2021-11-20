import React, { useState, useEffect } from "react";
import Axios from 'axios'
import './App.css';

function App() {

  const [name, setName] = useState("");

  const [cupcakeList, setcupList] = useState([])

  useEffect(()=>{
    Axios.get("http://localhost:5000/read").then((response)=>{
      setcupList(response.data);
    });
  }, [])

  const addCupcake = () => {
    Axios.post("http://localhost:5000/insert",{
      name: name,
    });
  };

  return (
    <div className="App container">
        <h1> Cupcakes App </h1>
        <div className="m-50 bg-color-orange wd-50 bd-rad2">
          <div className="container mtop-3 mbot-3">
            <label className="m-10 ">Agrega un tipo de Cupcake (ej: chocolate, vainilla, etc)</label>
            <input 
              type="text"
              onChange={(event)=>{
                setName(event.target.value);
              }}
              />
          </div>
        </div>
        <div className="container">
          <button onClick={addCupcake} className="m-10 bd-rad5 bg-color-yellow">Agregar Cupcake</button>
          <button className="m-10 bd-rad5 bg-color-yellow">Buscar Cupcake</button>
          <button className="m-10 bd-rad5 bg-color-yellow">Eliminar Cupcake</button>
          <button className="m-10 bd-rad5 bg-color-yellow">Actualizar Cupcake</button>
        </div>
        <h1>Lista de cupcakes</h1>

        {cupcakeList.map((val, key)=>{
          return <div key={key}><h1> {val.name} </h1></div>
        })}

    </div>
  );
}

export default App;
