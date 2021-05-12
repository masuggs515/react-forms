import { useState } from "react";
import ToDo from './ToDo'
import {v4 as uuid} from 'uuid'
import './ToDoList.css'
import NewToDoForm from "./NewToDoForm";

const ToDoList = () =>{
    const INITIAL_LIST = [{id: uuid(), item: "Peanut Butter"}, 
    {id: uuid(), item: "Snickers"},
    {id: uuid(), item: "Milk"}]

    const [list, setList] = useState(INITIAL_LIST);

    const removeItem= (id) =>{
        setList(list.filter(item => item.id !== id))
    }

    const addItem = (listData) =>{
        setList(list => [...list, {...listData, id: uuid()}])
    }



    const finalList = list.map(item => <ToDo 
        item={item.item}
        id={item.id} 
        key={item.id}
        removeItem={removeItem}/>)


    return (
        <div className="ToDoList">
            <h1>To Do List</h1>
            <NewToDoForm addItem={addItem} />
            <ul className='ToDoList-list'>
                {finalList}
            </ul>
        </div>
    );
};

export default ToDoList;