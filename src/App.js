import { useState } from "react";

function App() {
  const [code, setCode] = useState(""); 
  
  return (
    <div className="App">       

      <textarea placeholder="Digite aí" value={code}
	    onChange={(e) => setCode(e.target.value)}rows={15}></textarea>
      
      <div className="mirror">
        <h1>Código</h1>
        {code.toUpperCase()}
      </div>
    </div >
  );
}

export default App;