import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Item from './components/Item';
import List from './components/List';
import './App.css';

const SAVED_ITEMS = 'savedItems'

function Todo(){
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems){
            setItems(savedItems);
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);

    function onAddItem(text){

        let novoItem = new Item(text);

        setItems([...items, novoItem]);
    }

    function onItemDeleted(novoItem){
        
        let filteredItems = items.filter(ite => ite.id !== novoItem.id);
        setItems(filteredItems);
    }

    function onDone(novoItem){
        
        let updatedItems = items.map(ite => {
            if(ite.id === novoItem.id){
                ite.done = !ite.done;
            }

            return ite;
        })

        setItems(updatedItems);
    }


    return(

        <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>            
            <List
                onItemDeleted={onItemDeleted} items={items}
                onDone={onDone}
            >
            </List>            
        </div>
        
    );
}

export default Todo;