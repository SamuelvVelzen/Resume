import React from 'react';

import Navbar from './../../shared/navbar';
import Hero from './components/hero';
import USPS from './components/usps';
import Project from './components/projects';

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
