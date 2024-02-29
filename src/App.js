import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Weather from './Weather';
import MainWeather from './history';
import Profile from './profile';
import './App.css'; // Import your custom CSS file for global styles

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <div className="navbar">
          <Link to="/" className="navbar-option">Weather</Link> {/* Link to the Weather component */}
        
          <Link to="/profile" className="navbar-option">Profile</Link>
          <Link to="/history" className="navbar-option">History</Link>
          
        </div>
        
        {/* Routes */}
        <Routes>
        
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/history" element={<MainWeather />} /> 
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
