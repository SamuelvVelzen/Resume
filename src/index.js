import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import { ThemeContext, themes } from './logics/theme-context';

import './styles/style/index.css';

function Index() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = function () {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <App />
        </ThemeContext.Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root')
);
