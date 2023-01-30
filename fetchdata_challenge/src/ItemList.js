import React from 'react'
import LineItem from './LineItem'

const ItemList = ({ items }) => {
  return (
    <tbody className='itemList'>
      {items.map((item) => (
        <LineItem 
          key = {item.id}
          item = {item}
        />
      ))}
      
    </tbody>
  )
}

export default ItemList