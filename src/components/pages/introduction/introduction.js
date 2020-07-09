import React, { useRef } from 'react';

import Navbar from './../../shared/navbar';
import Hero from './components/hero';
import { USPS } from './components/usps';
import { Project } from './components/projects';

import { scrollToRef } from '../../../logics/navigation';

export default function App() {
    const introduction = useRef(null),
        projects = useRef(null);

    return (
        <>
            <Navbar
                links={{
                    Introduction: {
                        ref: introduction,
                    },
                    Projects: {
                        ref: projects,
                    },
                }}
                action={scrollToRef}
            />
            <Hero />
            <USPS ref={introduction} />
            <Project ref={projects} />
        </>
    );
}
