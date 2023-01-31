import React from 'react'
import Table from './Table'

const Content = ({ items }) => {
  return (
    <table>
        <Table
            items = {items}
        />
    </table>
  )
}

export default Content