import React from 'react';
import { ThemeContext } from '../../../../logics/theme-context';

import './../../../../styles/style/components/pages/project/textcontent.scss';

export default function TextContent(props) {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <section
                    className="textcontent"
                    style={{
                        backgroundColor: theme.primary,
                        color: theme.style === 'dark' ? theme.white : null,
                    }}
                >
                    <h1 className="title">{props.title}</h1>
                    <div className="content">
                        <h2 className="header">{props.left.title}</h2>
                        <p>{props.left.content}</p>
                    </div>
                    <div className="content">
                        <h2 className="header">{props.right.title}</h2>
                        <p>{props.right.content}</p>
                    </div>
                </section>
            )}
        </ThemeContext.Consumer>
    );
}
