import './style.css';

import { Card } from '../../components/Card'

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder='Digite o nome...' />
      <button type='button'>Adicionar</button>
      
      <Card name="Rodrigo" time="10:55:25"/>
      <Card name="Roberto" time="10:56:10"/>
      <Card name="Ronaldo" time="11:00:05"/>
    </div>
  )
}
