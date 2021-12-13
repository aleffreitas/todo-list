import React from "react";
import './App.css';

function Todo(){
    return(

        <div className="container">
            <h1>Todo</h1>
            <form>
                <input type="text"></input>
                <button>Add</button>
            </form>

            <ul>
                <li>Itens</li>
            </ul>
        </div>
        
    );
}

export default Todo;