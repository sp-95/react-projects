import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item, setItem] = useState("")
  const [items, setItems] = useState({})
  const [alert, setAlert] = useState({})
  const [edit, setEdit] = useState(false)
  const [editID, setEditID] = useState(null)

  const clearValues = () => {
    setItem("")
    setEdit(false)
    setEditID(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let alertMessage, alertType
    if (!item) {
      alertMessage = "please enter value"
      alertType = "danger"
    } else if (edit) {
      items[editID] = item
      setItems(items)
      clearValues()

      alertMessage = "value changed"
      alertType = "success"

    } else {
      const id = Date.now().toString()
      setItems(prev => ({...prev, [id]: item}))
      clearValues()

      alertMessage = "item added to the list"
      alertType = "success"
    }

    setAlert({
      message: alertMessage,
      type: alertType
    })
  }

  const handleEdit = id => {
    setItem(items[id])
    setEdit(true)
    setEditID(id)
  }

  const handleDelete = id => {
    delete items[id]
    setItems(items)

    if (id === editID) clearValues()

    setAlert({
      message: "item removed",
      type: "danger"
    })
  }

  const handleClear = () => {
    setItems({})
    clearValues()
    setAlert({
      message: "empty list",
      type: "danger"
    })
  }

  useEffect(() => {
    const intervalID = setInterval(() => setAlert({}), 3000)
    return () => clearInterval(intervalID)
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
        {Object.entries(items).map(([id, item]) =>
          <List
            key={id}
            item={item}
            handleEdit={() => handleEdit(id)}
            handleDelete={() => handleDelete(id)}
          />
        )}
      </div>
      {items.length > 0 && <button className="clear-btn" onClick={handleClear}>clear items</button>}
    </section>
  )
}

export default App
