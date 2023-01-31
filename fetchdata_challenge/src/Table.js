import React from 'react'
import Row from './Row'

const Table = ({ items }) => {
  return (
    <tbody className='table-container'>
      {items.map(item => (
        <Row 
          key = {item.id}
          item = {item}
        />
      ))}
      
    </tbody>
  )
}

export default Table