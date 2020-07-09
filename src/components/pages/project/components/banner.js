import React from 'react';
import { ThemeContext } from '../../../../logics/theme-context';
import Pill from './../../../shared/pill';

import { allowedColors } from './../../../../config/projects';

import './../../../../styles/style/components/pages/project/banner.scss';

export default function Banner(props) {
    let tags = [];

    props.tags.forEach((element, index) => {
        tags.push(
            <Pill
                key={element}
                class="active"
                color={allowedColors[index]}
                label={element}
            />
        );
    });

    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <section
                    className="banner"
                    style={{
                        backgroundColor: theme.primary,
                    }}
                >
                    <div className="content">
                        <h1 className="header">{props.title}</h1>
                        <h2 className="subtitle">{props.company}</h2>
                        <div className="pillsgroup">{tags}</div>
                    </div>
                    <span
                        className="content imgbanner"
                        style={{ backgroundImage: `url(${props.banner})` }}
                    ></span>
                </section>
            )}
        </ThemeContext.Consumer>
    );
}
