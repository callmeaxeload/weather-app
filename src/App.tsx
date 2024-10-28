import Weather from './components/Weather';
import './App.css';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="container text-center">
        <Weather />
      </div>
    </div>
  );
};

export default App;
