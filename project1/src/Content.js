import React from 'react';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <>
      {items.length ? (
        <ItemList 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{color: 'red', fontWeight: 'bold'}}> Lista Vazia.</p>
      )}
    </>
  )
}

export default Content