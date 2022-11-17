import './style.css'

export function Card(props){
    return(
        <li className='card'>
            <p>{props.name}</p>
            <time dateTime={props.time}>{props.time}</time>
        </li>
    )
}