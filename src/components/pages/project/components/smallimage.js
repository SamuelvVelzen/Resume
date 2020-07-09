import React from 'react';
import { ThemeContext } from '../../../../logics/theme-context';

import './../../../../styles/style/components/pages/project/smallImage.scss';

export default function SmallImage(props) {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <section
                    className="smallimage"
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
