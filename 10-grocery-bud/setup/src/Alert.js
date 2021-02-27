import React, { useEffect } from 'react'

const Alert = ({ message, type }) => {
  return <p className={`alert ${type}`}>{message}</p>
}

export default Alert
