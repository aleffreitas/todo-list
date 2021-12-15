import React from "react";
import ListItem from "./ListItem";


function List(props) {
    return (
        <ul>
            {props.items.map(novoItem =>
                <ListItem
                    key={novoItem.id}
                    novoItem={novoItem}
                    onDone = {props.onDone}
                    onItemDeleted = {props.onItemDeleted}
                >

                </ListItem>    
            )}
        </ul>
    );
}

export default List;