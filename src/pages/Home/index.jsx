import './style.css';

import { Card } from '../../components/Card'
import React, { useState, useLayoutEffect } from 'react';



export function Home() {
  const [nameList, setNameList] = useState('');

  const [names, setNames] = useState([]);

  const [user, setUser] = useState({name: '', avatar:''});

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
  // executa uma vez ANTES da renderizão da página ou ao ter uma alteração em algo dentro do seu vetor de verificação
  useLayoutEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/nerdstarcode');
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    fetchData()
    // fetch('https://api.github.com/users/nerdstarcode')
    //   .then(response => response.json())
    //   .then(data => {
    //     setUser({
    //       name: data.name,
    //       avatar: data.avatar_url,
    //     })
    //   })
  }, []);
  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div className='perfil'>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

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
