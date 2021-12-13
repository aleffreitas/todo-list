import React from "react";
import Card from './Card'

function DoneImg(props) {
    if (props.done) {
        return (
            <img src="./assets/on.png" alt="done" />
        );
    } else {
        return (
            <img src="./assets/off.png" alt="undone" />
        );
    }
}

function List(props) {
    return (
        <ul>
            {props.items.map(novoItem =>
                <li 
                    key={novoItem.id}>

                    <Card className={novoItem.done ? "done item" : "item"}>
                        {novoItem.text}

                        <div>
                            <button onClick={() => {
                                props.onDone(novoItem)
                            }}>
                                <DoneImg done={novoItem.done}>

                                </DoneImg>
                            </button>

                            <button onClick={() => {
                                props.onItemDeleted(novoItem)
                            }}>
                                <img src="./assets/trash.png" alt="Delete" />
                            </button>
                        </div>
                    </Card>
                </li>
            )}
        </ul>
    );
}

export default List;