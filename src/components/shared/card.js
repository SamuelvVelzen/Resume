import React from 'react';

import './../../styles/style/components/shared/card.scss';
import Pill from './pill';

function generateTags(tags, tagsObj) {
    let pills = [];

    tags.sort();

    tags.forEach((element, index) => {
        if (index < 2) {
            pills.push(
                <Pill
                    key={element}
                    label={element}
                    class="active"
                    color={tagsObj[element].activeColor}
                />
            );
        }

        if (tags.length > 3 && index === 2) {
            pills.push(
                <Pill
                    key={element}
                    label={element + '...'}
                    class="active"
                    color={tagsObj[element].activeColor}
                />
            );
        } else if (index === 2) {
            pills.push(
                <Pill
                    key={element}
                    label={element}
                    class="active"
                    color={tagsObj[element].activeColor}
                />
            );
        }
    });

    return pills;
}

export default function Card(props) {
    const tags = generateTags(props.tags, props.tagsObj);

    return (
        <div className="card">
            <img
                className="card_image"
                src={props.img}
                alt={props.title + ' project'}
            />
            <div className="card_textbox" style={{ color: props.textColor }}>
                <h2 className="header">{props.title}</h2>

                {tags}

                <p>{props.desc}</p>
            </div>
        </div>
    );
}
