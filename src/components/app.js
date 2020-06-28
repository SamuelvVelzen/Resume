import React from 'react';

import Navbar from './shared/navbar';
import Hero from './pages/hero';
import USPS from './pages/usps';
import Project from './pages/project';

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <USPS />
            <Project />
        </>
    );
}
