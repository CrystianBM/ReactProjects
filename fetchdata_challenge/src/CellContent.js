import React from 'react'

const CellContent = ({ cell }) => {
  return (
    <td>
        {JSON.stringify(cell)}
    </td>
  )
}

export default CellContent