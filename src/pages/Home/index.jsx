import './style.css';

import { Card } from '../../components/Card'
import React, { useState } from 'react';



export function Home() {
  const [nameList, setNameList] = useState('');

  const [names, setNames] = useState([]);

  function handleAddNames(){
    const newName = {
      name: nameList,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setNames(prevState => [...prevState, newName])//o prevState recupera valores anteriores do estado, pode-se usar o nome que quiser
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input 
        type="text" 
        placeholder='Digite o nome...' 
        onChange={e => setNameList(e.target.value)}
        />
      <button 
        type='button' 
        onClick={handleAddNames}
      >
        Adicionar {nameList}
      </button>
      
      {
        names.map(names => (
          <Card 
            key={names.time} 
            name={names.name} 
            time={names.time}
          />
        ))
      }
    </div>
  )
}
