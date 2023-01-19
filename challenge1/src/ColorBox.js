import React from 'react'

const ColorBox = ({ color, hex, isDarkText}) => {
  return (
    <div 
        className='colorBox'
        style={{
            color: isDarkText ? "#FFF" : "#000",
            backgroundColor: color
        }}
    >
        <p> {color==='' ? 'Empty' : color} </p>
        <p> {hex==='' ? null : hex} </p>
    </div>
  )
}

export default ColorBox