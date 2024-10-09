import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteContainer from './components/siteContainer'; // Adjust path as necessary
import Header from './components/header';
import Home from './pages/home'; // Make sure this path is correct
import Portfolio from './pages/portfolioComponent'; // Make sure this path is correct
import Contact from './pages/contact'; // Make sure this path is correct
import About from './pages/about'; // Make sure this path is correct
import Footer from './components/footer';
import './App.css'; // Optional: Import your global styles here

const App = () => {
    return (
        <Router>
            <SiteContainer>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    {/* Add more routes as needed */}
                </Routes>
                <Footer />
            </SiteContainer>
        </Router>
    );
};

export default App;

