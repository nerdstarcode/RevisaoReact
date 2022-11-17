import './style.css'

export function Card(){
    return(
        <li className='card'>
            <p>Nome da pessoa</p>
            <time dateTime='HH:MM:SS'>hh:mm:ss</time>
        </li>
    )
}