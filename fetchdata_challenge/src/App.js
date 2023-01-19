import { useState } from 'react';
import Buttons from './Buttons';

function App() {
  const [activeUrlButton, setActiveUrlButton] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [isDarkText, setIsDarkText] = useState('');
  
  return (
    <div className="App">
      <Buttons
      />
    </div>
  );
}

export default App;
