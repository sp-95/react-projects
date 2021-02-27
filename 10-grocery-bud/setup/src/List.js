import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ item, handleEdit, handleDelete }) => {
  return (
    <article className="grocery-item">
      <p className="title">{item}</p>
      <div>
        <button className="edit-btn" onClick={handleEdit}><FaEdit /></button>
        <button className="delete-btn" onClick={handleDelete}><FaTrash /></button>
      </div>
    </article>
  )
}

export default List
