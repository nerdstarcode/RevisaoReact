import React from 'react'
import './style.sass'

export interface CardProps{
    name: string,
    time: string,
    key?: string 
}

export function Card({name, time}: CardProps){
    return(
        <li className='card'>
            <p>
                <span>Pontos</span>
                {name}
            </p>
            <time dateTime={time}>
                {time}
                <span>Remover</span>
            </time>
        </li>
    )
}