import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../../logics/theme-context';
import Card from './../shared/card';

import './../../styles/style/components/pages/project.scss';

import Vicrea from './../../styles/images/content/hero.png';
import Pill from '../shared/pill';

const requiredKeys = ['image', 'tags', 'textColor', 'description'],
    projects = {
        Vicrea: {
            image: Vicrea,
            textColor: 'white',
            tags: ['HTML', 'CSS', 'JavaScript', 'Gulp'],
            description: 'lorem test lalalal allalals sdks a hoie soa;',
        },
        Indivirtual: {
            image: Vicrea,
            textColor: 'white',
            tags: ['C#', 'HTML', 'SCSS', 'ReactJS'],
            description: 'lorem test lalalal allalals sdks a hoie soa;',
        },
        Test: {
            image: Vicrea,
            textColor: 'white',
            tags: ['C#', 'HTML', 'SCSS'],
            description: 'lorem test lalalal allalals sdks a hoie soa;',
        },
    };

function checkRequiredKeys(obj) {
    for (let key in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(key)) continue;
        let valKey;

        if (
            !requiredKeys.every((val) => {
                valKey = val;
                return Object.keys(obj[key]).includes(val);
            })
        ) {
            console.error(`${key} is missing the prop: ${valKey}`);
        }
    }
}

function calculateTags(obj) {
    let tagsObj = {};

    for (var key in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(key)) continue;

        var propKey = obj[key];

        for (var prop in propKey) {
            // skip loop if the property is from prototype
            if (prop === 'tags') {
                propKey[prop].forEach((element) => {
                    if (element in tagsObj) {
                        tagsObj[element].count += 1;
                    } else {
                        tagsObj[element] = {
                            count: 1,
                            activeColor: 'blue',
                        };
                    }
                });
            }
        }
    }

    return tagsObj;
}

function calculatePills(obj) {
    const tagsObj = calculateTags(obj),
        total = Object.keys(obj).length;

    let pills = [];

    pills.push(<Pill id="All" key="All" label="All" total={total} />);

    for (var pillItem in tagsObj) {
        pills.push(
            <Pill
                id={pillItem}
                key={pillItem}
                label={pillItem}
                total={tagsObj[pillItem].count}
                color={tagsObj[pillItem].activeColor}
            />
        );
    }

    return pills;
}

function calculateCards(filter, obj) {
    let cards = [];

    for (let key in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(key)) continue;

        let propKey = obj[key];

        if (filter.length === 0) {
            cards.push(
                <Card
                    key={key}
                    title={key}
                    img={propKey['image']}
                    textColor={propKey['textColor']}
                    tags={propKey['tags']}
                    desc={propKey['description']}
                />
            );
        } else {
            cards.push(checkFilter(propKey, filter, key));
        }
    }

    return cards;
}

function checkFilter(propKey, filter, key) {
    for (let j = 0; j < propKey['tags'].length; j++) {
        for (let i = 0; i < filter.length; i++) {
            if (propKey['tags'][j] === filter[i]) {
                return (
                    <Card
                        key={key}
                        title={key}
                        img={propKey['image']}
                        textColor={propKey['textColor']}
                        tags={propKey['tags']}
                        desc={propKey['description']}
                    />
                );
            }
        }
    }
}

export default function Project() {
    const [filter, setFilter] = useState([]),
        [cards, setCards] = useState(calculateCards(filter, projects));

    const pills = calculatePills(projects);

    const filterCards = (event) => {
        let el = event.target,
            existArr = false;

        if (el.parentNode.classList.contains('pill')) {
            el = el.parentNode;
        }

        if (el.classList.contains('pill')) {
            if (el.id === 'All') {
                setFilter([]);
                setCards(calculateCards([], projects));
                return;
            }

            filter.forEach((element) => {
                if (element === el.id) {
                    existArr = true;

                    let arr = filter;
                    arr = arr.filter((item) => item !== el.id);

                    setFilter(arr);
                    setCards(calculateCards(arr, projects));
                    return;
                }
            });

            if (!existArr) {
                filter.push(el.id);

                setFilter(filter);
                setCards(calculateCards(filter, projects));
                return;
            }
        }
    };

    console.log(filter);

    checkRequiredKeys(projects);

    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <article
                    id="project"
                    style={{
                        backgroundColor: theme.primary,
                    }}
                >
                    <h1
                        className="title"
                        style={{
                            color: theme.black,
                        }}
                    >
                        Projects
                    </h1>

                    <div className="pillsGroup" onClick={filterCards}>
                        {pills}
                    </div>

                    <div className="cardsGroup">{cards}</div>
                </article>
            )}
        </ThemeContext.Consumer>
    );
}
