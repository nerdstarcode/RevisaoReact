import './style.css'

export function Card({name, time}){
    return(
        <li className='card'>
            <p>{name}</p>
            <time dateTime={time}>{time}</time>
        </li>
    )
}