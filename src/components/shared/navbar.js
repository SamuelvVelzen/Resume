import React from 'react';

import './../../styles/style/components/shared/navbar.scss';
import ThemeButton from './buttons';

export default function Navbar() {
    return (
        <div id="navbar">
            <p className="description bold">Samuel.</p>
            <button className="link">Introduction</button>
            <button className="link">Projects</button>
            <ThemeButton />
        </div>
    );
}
