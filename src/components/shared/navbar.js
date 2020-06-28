import React from 'react';
import { ThemeContext } from '../../logics/theme-context';

import './../../styles/style/components/shared/navbar.scss';
import ThemeButton from './buttons';

export default function Navbar() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <div
                    id="navbar"
                    style={{
                        backgroundColor: theme.primary,
                    }}
                >
                    <p
                        className="description bold"
                        style={{
                            color: theme.style === 'dark' ? theme.white : null,
                        }}
                    >
                        Samuel.
                    </p>
                    <button
                        className="btn btn_link"
                        style={{
                            backgroundColor: theme.primary,
                            color: theme.style === 'dark' ? theme.white : null,
                        }}
                    >
                        <span
                            className={
                                theme.style === 'dark'
                                    ? 'hover inline ' + theme.style
                                    : 'hover inline'
                            }
                        >
                            Introduction
                        </span>
                    </button>
                    <button
                        className="btn btn_link"
                        style={{
                            backgroundColor: theme.primary,
                            color: theme.style === 'dark' ? theme.white : null,
                        }}
                    >
                        <span
                            className={
                                theme.style === 'dark'
                                    ? 'hover inline ' + theme.style
                                    : 'hover inline'
                            }
                        >
                            Projects
                        </span>
                    </button>
                    <ThemeButton />
                </div>
            )}
        </ThemeContext.Consumer>
    );
}
