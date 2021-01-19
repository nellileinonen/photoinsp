import React from 'react';
import './App.css';
import Photolist from './components/photolist/Photolist';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Photoinsp</h1>
      <Photolist />
    </div>
  );
}

export default App;
