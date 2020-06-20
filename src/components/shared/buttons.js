import React from 'react';
import { ThemeContext } from '../../logics/theme-context';

import './../../styles/style/components/shared/buttons.scss';

export default function ThemeButton() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    className={
                        theme.style === 'light'
                            ? 'btn btn_theme light'
                            : 'btn btn_theme dark'
                    }
                    onClick={toggleTheme}
                    style={{
                        backgroundColor: theme.primary,
                        color: theme.style === 'dark' ? theme.white : null,
                    }}
                ></button>
            )}
        </ThemeContext.Consumer>
    );
}
