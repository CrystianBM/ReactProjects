import { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Content from './Content';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [reqType, setReqType] = useState('users');
  const [fetchError, setFetchError] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
        try {
          const response = await fetch(`${API_URL}${reqType}`);
          if(!response.ok) throw Error("Data not received!");
          const data = await response.json();
          setItems(data);
          setFetchError(null);
        } catch(err) {
          setFetchError(err.message);
        }
      }

      fetchItems();
  }, [reqType])

  return (
    <div className="App">
      <Buttons
        setReqType = {setReqType}
      />
      <main>
        <div className='error'>{fetchError && <p style = {{ color: 'red' }} >{`Error: ${fetchError}`}</p>}</div>
        {!fetchError && <Content 
          items = {items}
        />}
      </main>
    </div>
  );
}

export default App;
