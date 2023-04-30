import { useState } from "react";
import ReactDom from 'react-dom'
import './ModalForm.css'

const Modal = ({open, closeModal, children}) => {

    if(!open) return null
  
    
    return ReactDom.createPortal(
        <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <div className="modal-container">
                {children}
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;