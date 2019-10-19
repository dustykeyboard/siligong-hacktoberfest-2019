import React from 'react';
import logo from './images/logo.png';
import siligong from './images/siligong.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logos">
          <a
            className="App-link"
            href="https://hacktoberfest.digitalocean.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="Hacktoberfest" />
          </a>
          <a
            className="App-link"
            href="https://www.siligongvalley.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={siligong} className="App-logo" alt="Siligong Valley" />
          </a>
        </div>
        <p>
          Welcome to
          {' '}
          <a
            className="App-link"
            href="https://www.siligongvalley.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            SiligongValley
          </a>
          {' '}
          <a
            className="App-link"
            href="https://hacktoberfest.digitalocean.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            #Hacktoberfest
          </a>
          {' '}
          2019
        </p>
      </header>
    </div>
  );
}

export default App;
