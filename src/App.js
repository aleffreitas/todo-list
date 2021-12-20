import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Item from './components/Item';
import List from './components/List';
import Modal from './components/Modal';
import './App.css';

const SAVED_ITEMS = 'savedItems'

function Todo(){
    
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

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

        onHideModal();
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

    function onHideModal() {
        setShowModal(false);
    }

    return(

        <div className="container">
            
            <header className='header'>
                <h1>Todo</h1>
                <button
                    className='addButton'
                    onClick={() => {setShowModal(true)}}
                >+
                </button>            
            </header>
            {/* <TodoForm onAddItem={onAddItem}></TodoForm>             */}
            <List
                onItemDeleted={onItemDeleted} items={items}
                onDone={onDone}
            >
            </List>

            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAddItem={onAddItem}>
                </TodoForm>
            </Modal>            
        </div>
        
    );
}

export default Todo;