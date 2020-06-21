import React from 'react';

import './../../styles/style/components/shared/pill.scss';

export default function Pill(props) {
    return (
        <span
            id={props.id}
            className="pill"
            style={{ backgroundColor: props.active ? props.color : null }}
        >
            {props.label}{' '}
            {props.total ? (
                <span className="total">({props.total})</span>
            ) : null}
        </span>
    );
}
