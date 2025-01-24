import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Activity from './pages/activity';
import Signal from './pages/signal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/signal" element={<Signal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;