import {useState} from 'react'
import './NewToDoForm.css'

const NewToDoForm =({addItem}) =>{


    const INITIAL_FORM_DATA = {
        item: ''
    };

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = e =>{
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = e =>{
        e.preventDefault();
        addItem(formData)
        setFormData(INITIAL_FORM_DATA)
    };

    return(
    <form className='NewToDoForm' onSubmit={handleSubmit}>
        <label htmlFor='item'>To Do: </label>
        <input 
        name='item' 
        id='item' 
        type='text'
        placeholder='Enter To Do...'
        value={formData.item}
        onChange={handleChange}
         />

        <button>Add To Do</button>
    </form>
    )


}

export default NewToDoForm;