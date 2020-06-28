import React from 'react';

import Navbar from './shared/navbar';
import Hero from './pages/hero';
import USPS from './pages/usps';
import Project from './pages/project';
import Contact from './pages/contact';

export default function App() {
    return [
        <div className="content" key="content">
            <Navbar />
            <Hero />
            <USPS />
            <Project />
        </div>,
        <div className="footer" key="footer">
            <Contact />
        </div>,
    ];
}
