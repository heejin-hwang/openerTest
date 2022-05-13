import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://local.dev.kakaoi.io:3000/billing/callback.html"
          target="_blank"
          // rel="noopener noreferrer"
        >
          성공
        </a>
        <a
          className="App-link"
          href="https://local.dev.kakaoi.io:3000/billing/payment/fail"
          target="_blank"
          // rel="noopener noreferrer"
        >
          실패
        </a>
      </header>
    </div>
  );
}

export default App;
