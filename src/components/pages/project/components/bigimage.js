import React from 'react';
import { ThemeContext } from '../../../../logics/theme-context';

import './../../../../styles/style/components/pages/project/bigImage.scss';

export default function BigImage(props) {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <section
                    className="bigimage"
                    style={{
                        backgroundColor: theme.primary,
                    }}
                >
                    <img className="image" src={props.img} alt={props.alt} />
                </section>
            )}
        </ThemeContext.Consumer>
    );
}
