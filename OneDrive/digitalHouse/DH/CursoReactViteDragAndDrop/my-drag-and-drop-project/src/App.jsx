import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import DragAndDrop from './views/DragAndDrop';
import FlipCards from './views/FlipCards';
import SliderCards from './views/SliderCards';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Drag and Drop</Link></li>
            <li><Link to="/flip-cards">Flip Cards</Link></li>
            <li><Link to="/slider-cards">Slider Cards</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DragAndDrop />} />
          <Route path="/flip-cards" element={<FlipCards />} />
          <Route path="/slider-cards" element={<SliderCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
