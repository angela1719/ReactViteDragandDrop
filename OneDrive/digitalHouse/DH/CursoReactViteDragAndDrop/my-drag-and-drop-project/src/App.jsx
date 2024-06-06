import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import DragAndDrop from './views/DragAndDrop';
import FlipCards from './views/FlipCards';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Drag and Drop</Link>
            </li>
            <li>
              <Link to="/flip-cards">Flip Cards</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DragAndDrop />} />
          <Route path="/flip-cards" element={<FlipCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
