import logo from './logo.svg';
import './App.css';
import Topo from './components/Topo';
import Corpo from './components/Corpo';
import SobreMim from './components/SobreMim';
import SaibaMais from './components/SaibaMais';
import Contato from './components/Contato';
import Rodape from './components/Rodape';




function App() {
  return (
    <div className="App">
    <Topo />
    <Corpo />
    <SobreMim  />
    <SaibaMais />
    <Contato />
    <Rodape />
   


    </div>
  );
}

export default App;
