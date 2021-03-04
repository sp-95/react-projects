import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, type, weight }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const intervalID = setInterval(
      () => setCopied(false),
      3000
    );
    return () => clearInterval(intervalID);
  }, [copied]);

  const colorValue = rgbToHex(...rgb)
  return (
    <article
      className={`color${type === "shade" ? " color-light" : ""}`}
      style={{ background: colorValue }}
      onClick={() => {
        setCopied(true);
        navigator.clipboard.writeText(colorValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{colorValue}</p>
      {copied && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
