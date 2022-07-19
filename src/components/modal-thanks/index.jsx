import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import './style.scss'

const ModalThanks = () => {
    return (
        <div className="modal">
            <h2>Mensagem Enviada</h2>
            <AiOutlineCheck className="icon-check" fontSize={'3rem'} />
        </div>
    );
}

export default ModalThanks;
