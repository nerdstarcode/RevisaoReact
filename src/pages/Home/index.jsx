import './style.sass';

import { Card } from '../../components/Card'
import React, { useState, useLayoutEffect, useEffect } from 'react';



export function Home() {
  const [nameList, setNameList] = useState('');

  const [listOfNames, setListOfNames] = useState([]);

  const [user, setUser] = useState({name: '', avatar:''});

  const [inputText, setInputText] = useState('')

  async function handleAddListOfNames(){
    const newName = {
      name: nameList,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    }
    //o prevState recupera valores anteriores do estado, pode-se usar o nome que quiser
    setListOfNames(prevState => [...prevState, newName]);
    
  }
  useEffect(()=>{

    if(listOfNames.length > 0){
      (function saveLocalStorage(){
        try{

          localStorage.setItem('listOfNames', JSON.stringify(listOfNames));//sei que não tem necessidade, mas vou mudar essa parte para um BD depois
          console.log('Salvo no localStorage'); 
        }catch(e){
          console.log('Não foi possível salvar no localStorage');
        }
      })()
    }
  }, [listOfNames]);
  useLayoutEffect(()=>{
  // executa uma vez ANTES da renderizão da página ou ao ter uma alteração em algo dentro do seu vetor de verificação
    async function fetchData(){
      const data = await fetch('https://api.github.com/users/nerdstarcode').then(response => response.json());
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    function getLocalStorage(){
      try{
        const listOfNamesList = JSON.parse(localStorage.listOfNames);
        console.log(listOfNamesList);
        if(listOfNamesList !== undefined){
          setListOfNames(listOfNamesList);
        }
      }catch(e){
        console.log('Não foi possível acessar o localStorage');
      }
    }
    fetchData();
    getLocalStorage();
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
        onChange={e => (
          setNameList(e.target.value),
          setInputText(e.target.value)
          )
        }
        value={inputText}
      />
      <button 
        type='button' 
        onClick={()=>{
          handleAddListOfNames(),
          setInputText('')
        }}
      >
        Adicionar {inputText}
      </button>
      
      {
        listOfNames.map(listOfNames => (
          <Card 
            key={listOfNames.time} 
            name={listOfNames.name} 
            time={listOfNames.time}
          />
        ))
      }
    </div>
  )
}
