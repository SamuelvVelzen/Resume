import React from 'react';

import Navbar from './shared/navbar';
import Hero from './pages/hero';
import USPS from './pages/usps';

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <USPS />
        </>
    );
}
