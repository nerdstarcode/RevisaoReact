import './style.sass'
import React, { useState, useLayoutEffect, useEffect } from 'react';

export function Controller({setListOfNames}){
    const [inputText, setInputText] = useState('')
    const [user, setUser] = useState({name: '', avatar:''});
    const [nameList, setNameList] = useState('');
    const [buttonController, setButtonController] = useState(true)

    function verificationName(inputValue: string){
        try{
            if(inputValue !== ''){
                setButtonController(false)
            }else{
                setButtonController(true)
            }
        }catch(e){
            console.log('Não foi possível mudar o estado do botão')
        }
    }
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
    useLayoutEffect(()=>{
        // executa uma vez ANTES da renderizão da página ou ao ter uma alteração em algo dentro do seu vetor de verificação
        async function fetchData(){
        const data = await fetch('https://api.github.com/users/nerdstarcode').then(response => response.json());
        setUser({
            name: data.name,
            avatar: data.avatar_url,
        });
        }
        fetchData();
    }, []);
    return(
        <form className='Container-Controll'>
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
                    setInputText(e.target.value),
                    verificationName(e.target.value)
                )}
                value={inputText}
            />
            <button 
                disabled={buttonController}
                type='button' 
                onClick={()=>{
                handleAddListOfNames(),
                setInputText(''),
                setButtonController(true)
                }}
            >
                Adicionar {inputText}
            </button>
        </form>
    )
}