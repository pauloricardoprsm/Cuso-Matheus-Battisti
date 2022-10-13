// Css
import './App.css';
import { HookUseState } from './components/prsm/HookUseState';
import { HookUseEffect } from './components/prsm/HookUseEffect';

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <HookUseState/>
      <HookUseEffect/>
    </div>
  );
}
