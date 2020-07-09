import React from 'react';
import { ThemeContext } from '../../../../logics/theme-context';

import './../../../../styles/style/components/pages/project/summary.scss';

export default function Summary(props) {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <section
                    className="summary"
                    style={{
                        backgroundColor: theme.secondary,
                        color: theme.white,
                    }}
                >
                    <h1 className="title">{props.title}</h1>
                    <p className="subtitle assignment">Assignment</p>
                    <p className="description">{props.desc}</p>
                </section>
            )}
        </ThemeContext.Consumer>
    );
}
