import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/header/navigation/Navigation';
import RootRoutes from './RootRoutes';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <RootRoutes />
      </div>
    </Router>
  );
}

export default App;
