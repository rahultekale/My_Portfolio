// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update this line
import Header from './componets/Header';
import Home from './componets/Home';
import About from './componets/About';
import Projects from './componets/Projects';
import Footer from './componets/Footer';
import Experience from './componets/Experience';
import BookACall from './componets/BookACall';
// Import any other components you have

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Change Switch to Routes */}
          <Route path="/" element={<Home />} /> {/* Updated syntax */}
          <Route path="/about" element={<About />} /> {/* Updated syntax */}
          <Route path="/projects" element={<Projects />} /> {/* Updated syntax */}
          <Route path="/experience" element={<Experience />} /> {/* Add the Experience route */}
          <Route path="/Book" element={<BookACall />} /> {/* Add the Book a Call route */}

          {/* Add other routes here */}
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
