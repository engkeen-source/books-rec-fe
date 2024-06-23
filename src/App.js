import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Recommendation from './components/Recommendation';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Recommendation />
      </div>
    </Router>
  );
}

export default App;