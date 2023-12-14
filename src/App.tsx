import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import OffcanvasExample from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
            <header>
        <OffcanvasExample/>
      </header>
      <body>
      <BrowserRouter>
      <Routes>
                <Route
                  path="/"
                  element={<Home/>}
                />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
              </Routes>
      </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
