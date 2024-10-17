import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteContainer from './components/siteContainer';
import Header from './components/header';
import Home from './pages/home';
import Portfolio from './pages/portfolioComponent';
import Contact from './pages/contact';
import About from './pages/about';
import Banner from './components/banner';
import Footer from './components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';




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
                    <Route path ="/banner" element={<Banner />} />
                </Routes>
                <Footer />
            </SiteContainer>
        </Router>
    );
};

export default App;


