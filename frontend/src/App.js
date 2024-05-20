import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './features/Dashboard';
import { Home } from './features/Home';
import { Listings } from './features/Listings';
import { Signin } from './features/Signin';


function App() {
  return (
    <div style={{"display": "flex", "width": "100vw", "height": "100vh", "margin": 0, "padding": 0}}>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;