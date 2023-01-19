import React from 'react'
import colorNames from 'colornames';

const SearchColor = ({ 
  color, setColor, setHex, isDarkText, setIsDarkText
}) => {
  return (
    <div>
        <label> Add color name:</label>
        <input
            className='searchColor'
            type='text'
            autoFocus
            placeholder='Add a color name'
            value={color}
            onChange={(e) => {
                setColor(e.target.value);
                setHex(colorNames(e.target.value));
            }}
        />
        <button
          type='button'
          style={{
            color: isDarkText ? "#FFF" : "#000"
          }}
          onClick={() => setIsDarkText(!isDarkText)}
        >
          Toggle Text Color
        </button>
    </div>
  )
}

export default SearchColor