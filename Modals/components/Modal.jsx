import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ seen, details, closeModal }) => {
    const modalStyle = { display: seen }

    return createPortal(
        <div className="modalBox" style={modalStyle}>
            <h1>{ `Details (${details.id})` }</h1>
            <hr/>
            <p>{ `Name: ${details.name}` }</p>
            <p>{ `Age: ${details.age}` }</p>
            <p>{ `Color: ${details.color}` }</p>
            <br/>
            <div id="btnContainer">
                <button onClick={closeModal}>Close</button>
            </div>
        </div>,
        document.getElementById("modal")
    )
}

export default Modal;