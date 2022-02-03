import "./App.css";
import React, { useState } from "react";
import TodoFrom from "./components/TodoFrom";
import TodoList from "./components/TodoList";

const todoListItems = [{todoItem: 'Buy a book', id: 12345}];

function App() {
    const [todoListItemUpdate, setTodoListItemUpdate] = useState(todoListItems);

    const getInputFromFormHandler = (todoItem) => {
        setTodoListItemUpdate((previousItems) => {
            return [todoItem, ...previousItems];
        });
    };

    const getItemidToRemoveHandler = (itemId) => {
        setTodoListItemUpdate((currentToDoItems) => {
            const filteredItems = currentToDoItems.filter(
                (item) => item.id !== itemId
            );
            return filteredItems;
        });
    };

    return (
        <div className="App">
            <TodoFrom getInputFromForm={getInputFromFormHandler} />
            <TodoList
                sendTodoItemToRender={todoListItemUpdate}
                getItemidToRemove={getItemidToRemoveHandler}
            />
        </div>
    );
}

export default App;
