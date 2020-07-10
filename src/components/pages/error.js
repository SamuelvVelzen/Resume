import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { projects } from './../../config/projects';

import './../../styles/style/components/shared/error.scss';

import { ReactComponent as Logo } from './../../styles/images/icons/arrow.svg';
import ThemeButton from '../shared/buttons';
import { ThemeContext } from '../../logics/theme-context';

export default function Error() {
    const location = useLocation(),
        history = useHistory();

    const generateAddresses = (theme) => {
        let addresses = [];

        Object.keys(projects).forEach((element) => {
            addresses.push(
                <button
                    key={element}
                    className="btn links"
                    style={{
                        color: theme.style === 'dark' ? theme.white : null,
                    }}
                    onClick={() => {
                        history.push('/project?name=' + element);
                    }}
                >
                    Project about <span className="path">{element}</span>
                </button>
            );
        });

        return addresses;
    };

    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <section
                    id="error"
                    style={{
                        backgroundColor: theme.primary,
                        color: theme.style === 'dark' ? theme.white : null,
                    }}
                >
                    <span className="themebutton">
                        <ThemeButton />
                    </span>
                    <h1 className="title">
                        No match for{' '}
                        <span className="title path">{location.pathname}</span>
                    </h1>
                    <p className="header">Try the following addresses:</p>
                    <div>
                        <button
                            className="btn links path"
                            style={{
                                color:
                                    theme.style === 'dark' ? theme.white : null,
                            }}
                            onClick={() => {
                                history.push('');
                            }}
                        >
                            Homepage
                        </button>

                        {generateAddresses(theme)}
                    </div>
                    <p className="contact header">Or contact me</p>
                    <span className="logo">
                        <Logo
                            className={
                                theme.style === 'dark' ? 'white' : 'dark'
                            }
                            style={{
                                fill:
                                    theme.style === 'dark'
                                        ? theme.black
                                        : theme.white,
                            }}
                        />
                    </span>
                </section>
            )}
        </ThemeContext.Consumer>
    );
}
