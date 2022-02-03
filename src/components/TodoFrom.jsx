import React, { useState } from "react";
import module from "./TodoForm.module.css";
import ErrorModal from "../UI/ErrorModal";

const TodoFrom = (props) => {
    console.log('TodoFrom.js props=> ', props);

    const [inputData, setInputData] = useState("");
    const [error, setError] = useState("");

    const handleInput = (e) => {
        setInputData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputData.trim().length === 0) {
            setError({
                title: "Error happend",
                message: "Please add a title",
            });
        } else {
            const todoItem = {
                todoItem: inputData,
                id: Math.random() * 100,
            };

            props.getInputFromForm(todoItem);

            setError("");
            setInputData("");
        }
    };

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    closeModalError={errorHandler}
                />
            )}

            <form onSubmit={handleSubmit} className={module.form}>
                <label htmlFor="todoInput">My Todo List</label>
                <input
                    onChange={handleInput}
                    type="text"
                    id="todoInput"
                    placeholder="Title..."
                    value={inputData}
                />
                <button type="submit">Add Todo</button>
            </form>
        </>
    );
};

export default TodoFrom;
