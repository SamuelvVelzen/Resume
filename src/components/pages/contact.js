import React from 'react';

import './../../styles/style/components/pages/contact.scss';

function mailContact() {
    const spam = 'samuelv',
        spamlast = 'velzen',
        spamaddress = '@gmai.com',
        subject = 'Gezellig bijkletsen';

    window.location.href = `mailto:${spam}${spamlast}${spamaddress}?SUBJECT=${subject}`;
}

export default function Contact(props) {
    return (
        <article id="contact">
            <a
                href="https://github.com/SamuelvVelzen"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
            >
                <span
                    className="icon"
                    role="img"
                    aria-label="github icon"
                ></span>
                <span className="header hover inline">GitHub</span>
            </a>
            <button onClick={mailContact} className="email btn btn_primary">
                <span className="icon" role="img" aria-label="email icon">
                    &#x1F4E7;
                </span>
                <span className="header hover inline">
                    SamuelvVelzen@gmail.com
                </span>
            </button>
            <a
                href="https://www.linkedin.com/in/samuelvvelzen/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
            >
                <span
                    className="icon"
                    role="img"
                    aria-label="linkedin icon"
                ></span>
                <span className="header hover inline">Linkedin</span>
            </a>
        </article>
    );
}
