// Css
import './App.css';

// Imagens
import City from './assets/city.jpg';

// Componentes
import { FistComponent } from './components/FistComponent';
import { Events } from './components/Events';

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
        <FistComponent/>
        <Events/>
        {/* Imagem em public */}
        <img src="/img1.jpg" alt="Uma bela paisagem" />
        {/* Imagem em asset */}
        <img src={City} alt="Uma bela Cidade" />
      <div>
      </div>
    </div>
  );
}