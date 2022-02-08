import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages';
import Services from './pages/services.js';
import About from './pages/about.js';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
