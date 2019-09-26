import React from 'react';
import './App.css';

const App = ({src, loading, onClickButton, buttonText}) => (
  <div className="App">
    <header className="App-header">
      <img src={src} className="App-logo" alt="logo" />
      <p>
        {loading ? 'Loading...' : 'Loaded'}
      </p>
      <button onClick={onClickButton}>{buttonText}</button>
    </header>
  </div>
);

export default App;
