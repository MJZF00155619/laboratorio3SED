import React, { useState, useEffect } from "react";
import Axios from 'axios'
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [newCupName, setNewCup] = useState("")
  const [cupcakeList, setcupList] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:5000/read").then((response)=>{
      setcupList(response.data);
    });
  }, [])

  const addCupcake = () => {
    Axios.post("http://localhost:5000/insert",{
      name: name,
    });
    window.location.reload();
  };

  const updateCupcake = (id) =>{
    Axios.put("http://localhost:5000/update", {
      id:id,
      newCupName: newCupName,
    });
    window.location.reload();
  }

  const deleteCupcake = (id) =>{
    Axios.delete(`http://localhost:5000/delete/${id}`)
    window.location.reload();
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
        </div>
        <h1>Lista de cupcakes</h1>

        {cupcakeList.map((val, key)=>{
          return (
              <div key={key} className="container bg-color-a bd-rad2 m-10">
                <h1> {val.name} </h1>
                <input type="text" placeholder="Ingrese el nuevo nombre del cupcake" 
                  onChange={(event)=>{
                  setNewCup(event.target.value);
                }}
                />
                <button onClick={()=> updateCupcake(val._id)} className="m-10 bd-rad5 bg-color-yellow">Actualizar Cupcake</button>
                <button onClick={()=> deleteCupcake(val._id)} className="m-10 bd-rad5 bg-color-yellow">Eliminar Cupcake</button>
              </div>
          )    
        })}

    </div>
  );
}

export default App;
