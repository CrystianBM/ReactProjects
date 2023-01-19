import React from 'react'

const Footer = ({ length }) => {
  const today = new Date();

  return (
    <footer>
      <p>{length == null ? 0 : length} List {length === 1 ? "Item" : "Items"}</p>
    </footer>
  )
}

export default Footer