import React from 'react';

import './../../styles/style/components/shared/card.scss';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.title + ' project'} />
            <h2 className="title">{props.title}</h2>[<div>testt</div>,
            <div>test</div>]<p>{props.desc}</p>
        </div>
    );
}
