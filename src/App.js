import logo from './logo.svg';
import './App.css';

function App() {
  // console.log('kepTransactionId', window.opener.document.myForm.kepTransactionId);
  // console.log('userAuthToken', window.opener.document.myForm.userAuthToken);
  const param = window.opener.document.getElementById('myForm').value || '없다'

  return (
    <div className="App">
      <header className="App-header">
            
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{param}</div>
        <button onClick={() => window.location.href = 'https://local.dev.kakaoi.io:3000/billing/success.html'}>성공url로 직접</button>
        <button onClick={() => window.location.href = 'https://local.dev.kakaoi.io:3000/billing/fail.html'}>실패url로 직접</button>
        <button onClick={() => window.location.href = 'https://local.dev.kakaoi.io:3000/billing/callback'}>html로 안보내면?</button>
        <button onClick={() => window.location.href = 'https://local.dev.kakaoi.io:3000/billing/callback2.html?code=0000&message=zizizi'}>쿼리파람으로 성공</button>
        <button onClick={() => window.location.href = 'https://local.dev.kakaoi.io:3000/billing/callback2.html?code=0001&message=tlfvo'}>쿼리파람으로 성공</button>
      </header>
    </div>
  );
}

export default App;
