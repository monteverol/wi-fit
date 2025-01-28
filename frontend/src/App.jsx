import React from 'react';
import './Appv2.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from './pages/v2/wrapper';
import Activity from './pages/activity';
import Signal from './pages/signal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/signal" element={<Signal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;