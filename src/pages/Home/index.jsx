import './style.sass';

import { Card } from '../../components/Card'
import { Controller } from '../../components/Controller'
import React, { useState, useLayoutEffect, useEffect } from 'react';

export function Home() {
  const [listOfNames, setListOfNames] = useState([]);

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
    (function getLocalStorage(){
      try{
        const listOfNamesList = JSON.parse(localStorage.listOfNames);
        console.log(listOfNamesList);
        if(listOfNamesList !== undefined){
          setListOfNames(listOfNamesList);
        }
      }catch(e){
        console.log('Não foi possível acessar o localStorage');
      }
    })()
  }, []);
  return (
    <div className="container">
      <Controller
        setListOfNames={setListOfNames}
      />
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
