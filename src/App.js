import './App.css';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0)
  
  return (
    <div className='contador'>
      <h1>{contador}</h1>
      <div className='botoes'>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
