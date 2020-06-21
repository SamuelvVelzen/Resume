import React from 'react';

import './../../styles/style/components/shared/card.scss';
import Pill from './pill';

function generateTags(arr) {
    let pills = [];

    arr.forEach((element, index) => {
        if (index < 2) {
            pills.push(<Pill key={element} label={element} />);
        }

        if (arr.length > 3 && index === 2) {
            pills.push(<Pill key={element} label={element + '...'} />);
        } else if (index === 2) {
            pills.push(<Pill key={element} label={element} />);
        }
    });

    return pills;
}

export default function Card(props) {
    const tags = generateTags(props.tags);

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
