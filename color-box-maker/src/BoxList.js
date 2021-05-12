import React, { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import {v4 as uuid} from 'uuid'
import './BoxList.css'

const BoxList = () => {
    const INITIAL_LIST = [];

    const [boxes, setBoxes] = useState(INITIAL_LIST);

    const removeBox = box => {
        setBoxes(boxes.filter(b=> b.id !== box));
    };

    const addBox = (boxData) =>{
        setBoxes(boxes => [...boxes, {...boxData, id: uuid()}])
    }

    const finalBoxes = boxes.map(({id, color, height, width}) => <Box
    id={id}
    color={color}
    height={+height}
    width={+width} 
    removeBox={removeBox}
    addBox={addBox}
    key={id}/>
)


    return (
        <div className='BoxList'>
            
            <h1>Add Boxes</h1>
            <NewBoxForm addBox={addBox} />
                {finalBoxes}
        
        </ div>
    )
}

export default BoxList;