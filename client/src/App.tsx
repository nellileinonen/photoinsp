import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import RootRoutes from './RootRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <RootRoutes />
      </div>
    </Router>
  );
}

export default App;
