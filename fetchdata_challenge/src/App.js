import { useState } from 'react';
import Buttons from './Buttons';

function App() {
  const [color, setColor] = useState('');
  const [hex, setHex] = useState('');
  const [isDarkText, setIsDarkText] = useState('');
  
  return (
    <div className="App">
      <Buttons
      />
    </div>
  );
}

export default App;
