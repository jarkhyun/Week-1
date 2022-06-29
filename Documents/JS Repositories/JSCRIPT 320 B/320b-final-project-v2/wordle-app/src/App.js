import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Wordle/Home';
import Wordle from './Wordle/Wordle';
import Quordle from './Wordle/Quordle';
import Nav from './Wordle/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path="/" element={<Wordle />} />
          <Route path="/Sign In" element={<Home />} />
          <Route path="/quordle" element={<Quordle />} />
          <Route path="/*" element={<div><h1>404</h1><Link to="/">Home</Link></div>} />
      </Routes>
    </div>
  );
}

export default App;
