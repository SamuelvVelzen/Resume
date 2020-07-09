import React from 'react';

export const themes = {
    light: {
        style: 'light',
        primary: '#B1D9B0',
        secondary: '#2D7359',
        white: '#fff',
        black: '#242433',
    },
    dark: {
        style: 'dark',
        primary: '#2D7359',
        secondary: '#2D7359',
        white: '#fff',
        black: '#fff',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});
