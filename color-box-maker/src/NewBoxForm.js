import { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({addBox}) =>{

    const INITIAL_FORM_DATA = {
        color: '',
        height: '',
        width: ''
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
        addBox(formData)
        setFormData(INITIAL_FORM_DATA)
    };

    return(
    <form className='NewBoxForm' onSubmit={handleSubmit}>
        <label htmlFor='color'>Box Color:</label>
        <input 
        name='color' 
        id='color' 
        type='text'
        placeholder='Enter Color...'
        value={formData.color}
        onChange={handleChange}
         />

        <label htmlFor='height'>Box Height:</label>
        <input 
        name='height' 
        id='height' 
        type='number'
        placeholder='Enter Height...'
        value={formData.height}
        onChange={handleChange}
        />

        <label htmlFor='width'>Box Width:</label>
        <input 
        name='width' 
        id='width' 
        type='number'
        placeholder='Enter Width...'
        value={formData.width}
        onChange={handleChange}
        />

        <button>Add Box</button>
    </form>
)};

export default NewBoxForm;