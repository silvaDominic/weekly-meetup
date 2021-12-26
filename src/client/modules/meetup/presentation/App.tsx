import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/signup/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
