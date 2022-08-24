import './App.css';
import imagePikachu from './assets/pikachu.png';
import imageCharizard from './assets/Charizard.webp';
import { Landing } from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <header>
        <Landing/>
      </header>
    </div>
  );
}

export default App;
