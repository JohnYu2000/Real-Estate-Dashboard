import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './features/Dashboard';
import { Listings } from './features/Listings';
import { Profile } from './features/Profile';
import { Signin } from './features/Signin';
import { AuthProvider } from './contexts/AuthContext.tsx';
import ProtectedRoute from './utils/ProtectedRoute.tsx';


function App() {
  return (
    <Router>
      <AuthProvider>
        <div style={{"display": "flex", "width": "100vw", "height": "100vh", "margin": 0, "padding": 0}}>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
              <Route path="/listings" element={<ProtectedRoute element={<Listings />} />} />
              <Route path="/profile/:username" element={<ProtectedRoute element={<Profile />} />} />
            </Routes>
        </div>
      </AuthProvider>  
    </Router>
  );
}

export default App;