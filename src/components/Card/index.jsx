import './style.sass'

export function Card({name, time, ...rest}){
    return(
        <li className='card'>
            <p>{name}</p>
            <time dateTime={time}>
                {time}
                <span>Remover</span>
            </time>
        </li>
    )
}