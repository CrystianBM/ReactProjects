import React from 'react';
import ColorBox from './ColorBox';
import SearchColor from './SearchColor';

const Content = ({color, setColor, hex, setHex, isDarkText, setIsDarkText}) => {

  return (
    <main>
      <ColorBox 
        color={color}
        hex={hex}
        isDarkText={isDarkText}
      />
      <SearchColor 
        color={color}
        setColor={setColor}
        setHex={setHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  )
}

export default Content