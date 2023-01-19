import { useState } from 'react';
import Content from './Content';

function App() {
  const [color, setColor] = useState('');
  const [hex, setHex] = useState('');
  const [isDarkText, setIsDarkText] = useState('');
  
  return (
    <div className="App">
      <Content 
        color={color}
        setColor={setColor}
        hex={hex}
        setHex={setHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
