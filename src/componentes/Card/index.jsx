import './estilo.css'

const Card = (props) => {
    return <div className='card'>
        <ul> {props.children}</ul>
           
    </div>
}

export default Card