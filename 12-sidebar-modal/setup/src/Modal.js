import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  return (
    <section className="modal-overlay show-modal">
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </section>
  )
}

export default Modal
