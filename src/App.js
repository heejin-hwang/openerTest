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
        <button onClick={() => window.location.href = 'https://local.dev.kakaoi.io:3000/billing/callback.html'}>버튼일때는 다른가?</button>
        <a
          className="App-link"
          href="https://local.dev.kakaoi.io:3000/billing/callback.html"
          target="_blank"
          // rel="noopener noreferrer"
        >
          그냥 href
        </a>
        <a
          className="App-link"
          href="#"
          onclick="location.href='https://local.dev.kakaoi.io:3000/billing/callback.html'"
          target="_blank"
          // rel="noopener noreferrer"
        >
          그냥 location.href
        </a>
        <a
          className="App-link"
          href="#"
          onclick={() => window.location.href = 'https://local.dev.kakaoi.io:3000/billing/callback.html'}
          target="_blank"
          // rel="noopener noreferrer"
        >
          window.location.href 
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
