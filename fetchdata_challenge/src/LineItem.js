import React from 'react'
import CellContent from './CellContent';

const LineItem = ({ item }) => {
  const values = Object.values(item);
  
  return (
    <tr>
      {values.map((cell) => (
        <CellContent
        cell={cell} />
      ))}
    </tr>
  )
}

export default LineItem