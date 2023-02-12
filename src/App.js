import './App.css';
import Navbar from './components/Navbar';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Tecnologias from './components/Tecnologias';

function App() {
  return (
    <div className="App">      
        <div>
            <Navbar />  
            <SobreMi />
        </div>
        <div>
          <Proyectos />
        </div>
        <div>
          <Tecnologias />
        </div>
        <div>
          <Contacto />
        </div>
    </div>    
  );
}

export default App;
