import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Signin } from './features/Signin'
import { Dashboard } from './features/Dashboard'


function App() {
  return (
    <div style={{"display": "flex", "width": "100vw", "height": "100vh"}}>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;