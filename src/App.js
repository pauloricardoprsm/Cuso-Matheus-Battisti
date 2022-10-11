// Css
import './App.css';

// Imagens
import City from './assets/city.jpg';

// Componentes
import { FistComponent } from './components/FistComponent';
import { Events } from './components/Events';
import { ManageData } from './components/ManageData';

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
        <ManageData/>
      <div>
      </div>
    </div>
  );
}