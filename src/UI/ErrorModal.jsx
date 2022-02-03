import React from "react";
import module from "./ErrorModal.module.css";
const ErrorModal = (props) => {
    console.log("ErrorModal.js props=> ", props);

    const { title, message } = props;

    return (
        <>
            <div className={module.backdrop} />
            <div className={module.modal}>
                <header className={module.header}>{title}</header>
                <div className={module.body}>{message}</div>
                <footer className={module.footer}>
                    <button onClick={props.closeModalError}>Okay</button>
                </footer>
            </div>
        </>
    );
};

export default ErrorModal;
