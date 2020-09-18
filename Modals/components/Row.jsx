import React,{ useState,useEffect } from 'react'
import Modal from '../components/Modal';

const Row = ({ details }) => {
    const [modalSeen, setModalSeen] = useState("none");

    const openModal = (e) => {
        e.preventDefault();
        setModalSeen("block");
    }

    const closeModal = (e) => {
        e.preventDefault();
        setModalSeen("none");
    }

    useEffect(() => {
        const root = document.getElementById("root");
        root.className = (modalSeen==="block") ? "dim" : "normal";
    })

    return (
        <React.Fragment>
            <td>{ details.name }</td>
            <td>
                <button onClick={openModal}>Details</button>
            </td>  
            <Modal seen={modalSeen} details={details} closeModal={closeModal}/>
        </React.Fragment>
    )
}

export default Row;