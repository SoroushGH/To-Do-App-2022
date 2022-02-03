import React, { useState } from "react";
import module from "./TodoList.module.css";

const TodoList = (props) => {
    // console.log('TodoList.js props=> ', props);

    let todo = props.sendTodoItemToRender;
    const [strikethrough, setStrikethrough] = useState(false);

    const removeHndler = (itemId) => {
        //console.log(itemId);
        props.getItemidToRemove(itemId);
    };

    const strikethroughHandler = () => {
        strikethrough ? setStrikethrough(false) : setStrikethrough(true);
    };

    return (
        <div>
            {todo.map((item) => {
                return (
                    <div key={item.id} className={module.item}>
                        <ul>
                            <p
                                className={
                                    strikethrough ? module.strikethrough : ""
                                }
                                onClick={strikethroughHandler}
                            >
                                {item.todoItem}
                            </p>
                            <pre
                                onClick={() => removeHndler(item.id)}
                                className={module.remove}
                            >
                                Remove
                            </pre>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
