import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SchoolSelection from './components/SchoolSelection';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          {/* <Sidebar /> */}
          {/* <Dashboard /> */}
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/select-school" />} />
          <Route path="/select-school" element={<SchoolSelection />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
