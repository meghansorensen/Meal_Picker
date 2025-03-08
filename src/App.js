import logo from './logo.svg';
import './App.css';
import SpinningWheel from './SpinningWheel';
import food_meme from './food_meme.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={food_meme} alt="logo" />
        <div>
          <SpinningWheel />
        </div>
      </header>
    </div>
  );
}

export default App;
