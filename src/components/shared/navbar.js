import React from 'react';
import { ThemeContext } from '../../logics/theme-context';

import './../../styles/style/components/shared/navbar.scss';
import ThemeButton from './buttons';
import { useHistory } from 'react-router-dom';

export default function Navbar(props) {
    const history = useHistory();

    const navLinks = (theme) => {
        const menuItems = Object.keys(props.links),
            items = [];

        menuItems.forEach((element) => {
            items.push(
                <button
                    key={element}
                    className="btn btn_link"
                    onClick={() => {
                        props.action(props.links[element].ref);
                    }}
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
                        {element}
                    </span>
                </button>
            );
        });

        return items;
    };

    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <nav
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
                        onClick={() => {
                            history.push('/');
                        }}
                    >
                        Samuel.
                    </p>

                    {navLinks(theme)}

                    <ThemeButton />
                </nav>
            )}
        </ThemeContext.Consumer>
    );
}
