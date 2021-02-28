import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal } = useAppContext()

  return (
    <section className={`modal-overlay${isModalOpen ? " show-modal" : ""}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </section>
  )
}

export default Modal
