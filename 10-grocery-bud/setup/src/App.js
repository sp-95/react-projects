import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item, setItem] = useState("")
  const [items, setItems] = useState([])
  const [alert, setAlert] = useState({})
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    let alertMessage
    if (edit) {
      items[editIndex] = item
      setItems(items)
      alertMessage = "value changed"
      setEdit(false)
      setEditIndex(null)
    } else {
      setItems(prev => [...prev, item])
      alertMessage = "item added to the list"
    }

    setAlert({
      message: alertMessage,
      type: "success"
    })
    setItem("")
  }

  const handleEdit = index => {
    setItem(items[index])
    setEdit(true)
    setEditIndex(index)
  }

  const handleDelete = index => {
    items.splice(index, 1)
    setItems(items)

    if (index === editIndex) {
      setItem("")
      setEdit(false)
      setEditIndex(null)
    }

    setAlert({
      message: "item removed",
      type: "danger"
    })
  }

  const handleClear = () => {
    setItems([])
    setAlert({
      message: "empty list",
      type: "danger"
    })
  }

  useEffect(() => {
    const intervalId = setInterval(() => setAlert({}), 3000)
    return () => clearInterval(intervalId)
  }, [alert])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {Object.keys(alert).length > 0 && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={item}
            onChange={({ target }) => setItem(target.value)}
          />
          <button className="submit-btn">{edit ? "edit" : "submit"}</button>
        </div>
      </form>
      <div className="grocery-container">
        {items.map((item, index) =>
          <List
            key={index}
            item={item}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
          />
        )}
      </div>
      {items.length > 0 && <button className="clear-btn" onClick={handleClear}>clear items</button>}
    </section>
  )
}

export default App
