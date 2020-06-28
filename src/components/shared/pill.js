import React from 'react';

import './../../styles/style/components/shared/pill.scss';

export default function Pill(props) {
    const checkActive = () => {
        if (props.class || props.class === 'active') {
            return props.color;
        }
        return null;
    };

    return (
        <span
            id={props.id}
            className={props.class ? 'pill ' + props.class : 'pill'}
            style={{ backgroundColor: checkActive() }}
        >
            {props.label}{' '}
            {props.total ? (
                <span className="total">({props.total})</span>
            ) : null}
        </span>
    );
}
