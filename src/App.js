import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import navItems from './Data/NavItem'; // Import the navItems data
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Shop from './components/shop/Shop';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Nav navItems={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
