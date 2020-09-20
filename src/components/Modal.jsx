import React from 'react'
import { ReactComponent as DeleteButton } from '../assets/btn_delete.svg';

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__heading">
        <p>Edit name</p>
        <button className="modal__button_close"><DeleteButton/></button>
      </div>
      
    </div>
  )
}

export default Modal
