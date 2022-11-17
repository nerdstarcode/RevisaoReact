import './style.css'

export function Card({name, time, ...rest}){
    return(
        <li className='card'>
            <p>{name}</p>
            <time dateTime={time}>{time}</time>
        </li>
    )
}