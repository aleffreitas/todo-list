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

function ListItem(props) {
    return (
        <li>
            <Card className={props.novoItem.done ? "done item" : "item"}>
                {props.novoItem.text}

                <div>
                    <button onClick={() => {
                        props.onDone(props.novoItem)
                    }}>
                        <DoneImg done={props.novoItem.done}>

                        </DoneImg>
                    </button>

                    <button onClick={() => {
                        props.onItemDeleted(props.novoItem)
                    }}>
                        <img src="./assets/trash.png" alt="Delete" />
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default ListItem;