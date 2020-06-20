import React from 'react';
import { ThemeContext } from '../../logics/theme-context';

import './../../styles/style/components/pages/hero.scss';
import HeroImage from './../../styles/images/content/hero.png';

export default function Hero() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <article
                    id="hero"
                    style={{
                        backgroundColor: theme.primary,
                    }}
                >
                    <section
                        style={{
                            color: theme.style === 'dark' ? theme.white : null,
                        }}
                    >
                        <h1
                            className="title"
                            style={{
                                color:
                                    theme.style === 'dark' ? theme.white : null,
                            }}
                        >
                            Hi, I am Samuel
                        </h1>
                        <p
                            className="description subtitle"
                            style={{
                                color:
                                    theme.style === 'dark' ? theme.white : null,
                            }}
                        >
                            and I do <span className="subtitle">game</span>
                        </p>
                    </section>
                    <img
                        className="heroimage"
                        src={HeroImage}
                        alt="Samuel's hoofd"
                    />
                </article>
            )}
        </ThemeContext.Consumer>
    );
}
