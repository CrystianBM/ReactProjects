import React from 'react'
import CellContent from './CellContent';

const Row = ({ item }) => {
  
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return (
          <CellContent
          key={key}
          value={JSON.stringify(value)} />
        )
      })}
    </tr>
  )
}

export default Row