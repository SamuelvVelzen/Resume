import React from 'react';
import { ThemeContext } from '../../../../logics/theme-context';

import './../../../../styles/style/components/pages/project/bigImage.scss';

export const BigImage = React.forwardRef((props, ref) => (
    <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <section
                ref={ref}
                className="bigimage"
                style={{
                    backgroundColor: theme.primary,
                }}
            >
                <img className="image" src={props.img} alt={props.alt} />
            </section>
        )}
    </ThemeContext.Consumer>
));
