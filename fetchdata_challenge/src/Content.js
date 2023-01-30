import React from 'react'
import ItemList from './ItemList'

const Content = ({ items }) => {
  return (
    <table>
        <ItemList
            items = {items}
        />
    </table>
  )
}

export default Content