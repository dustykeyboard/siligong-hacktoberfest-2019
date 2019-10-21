import React from 'react';
import GlobalStyles from './GlobalStyles';
import './App.css';
import Header from './features/Header';
import Welcome from './features/Welcome';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
