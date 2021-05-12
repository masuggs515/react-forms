import './ToDo.css'

const ToDo = ({id, item, qty, price, removeItem}) =>{

    const handleRemoveClick = () =>{
        removeItem(id)
    }
    return (
        <li className='ToDo'>
            {item}
            <button className='ToDo-remove' onClick={handleRemoveClick}>X</button>
        </li>
    )
}

export default ToDo