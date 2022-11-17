import './style.css';

import { Card } from '../../components/Card'
import React, {useState} from 'react';

export function Home() {
  const [nomeList, setNomeList] = useState();
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input 
        type="text" 
        placeholder='Digite o nome...' 
        onChange={e => setNomeList(e.target.value)}
        />
      <button type='button'>Adicionar {nomeList}</button>
      
      <Card name="Rodrigo" time="10:55:25"/>
      <Card name="Roberto" time="10:56:10"/>
      <Card name="Ronaldo" time="11:00:05"/>
    </div>
  )
}
