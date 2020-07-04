import React from 'react';

import Navbar from './../shared/navbar';
import Hero from './hero';
import USPS from './usps';
import Project from './projects';

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
