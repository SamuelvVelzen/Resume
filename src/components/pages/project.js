import React, { useState } from 'react';
import { ThemeContext } from '../../logics/theme-context';
import Card from './../shared/card';

import './../../styles/style/components/pages/project.scss';

import Pill from '../shared/pill';

import { projects, requiredKeys, allowedColors } from './../../config/projects';
// import { } from './../../logics/filter';

function checkRequired(obj, tagsObj) {
    const total = Object.keys(tagsObj).length,
        length = 179;

    for (let key in obj) {
        // skip loop if the property is from prototype

        if (!obj.hasOwnProperty(key)) continue;

        const description = obj[key].description.length;
        let valKey;

        //check if every projects contains the require keys
        if (
            !requiredKeys.every((val) => {
                valKey = val;
                return Object.keys(obj[key]).includes(val);
            })
        ) {
            console.error(`${key} is missing the prop: ${valKey}`);
        }

        //check if description isn't too big
        if (description > length) {
            console.error(
                `Description is ${description}, but max size is 179, but the description is ${
                    description - length
                } characters too big`
            );
        }
    }

    //check if enough colors are available
    if (allowedColors.length < total) {
        console.error(
            `Only ${allowedColors.length} colors available while the application needs ${total}`
        );
    }
}

export default function Project() {
    console.log('project');
    //functions
    let filterCards,
        calculatePills,
        calculateTags,
        calculateCards,
        checkFilter,
        checkTags;

    calculateTags = (filter = []) => {
        let tagsObjUnSort = {},
            tagsObjSort = {},
            index = 0;

        for (let key in projects) {
            // skip loop if the property is from prototype
            if (!projects.hasOwnProperty(key)) continue;

            const propKey = projects[key];
            let loopIndex = index;

            propKey['tags'].forEach((element) => {
                if (element in tagsObjUnSort) {
                    tagsObjUnSort[element].count += 1;
                } else {
                    tagsObjUnSort[element] = {
                        count: 1,
                        activeColor: allowedColors[loopIndex],
                    };

                    loopIndex++;
                }
            });

            index = loopIndex;
        }

        Object.keys(tagsObjUnSort)
            .sort()
            .forEach(function (key) {
                tagsObjSort[key] = tagsObjUnSort[key];
            });

        return tagsObjSort;
    };

    checkTags = (propKey, tempObj, index, filter) => {
        let inFilter = false;

        // first check if tag exist in filter
        for (let i = 0; i < propKey['tags'].length; i++) {
            const element = propKey['tags'][i];

            if (filter.includes(element)) {
                inFilter = true;
            }
        }

        if (inFilter) {
            //if not exist add to tempObj and return
            propKey['tags'].forEach((element) => {
                if (element in tempObj) {
                    tempObj[element].count += 1;
                } else {
                    tempObj[element] = {
                        count: 1,
                        activeColor: allowedColors[index],
                    };

                    index++;
                }
            });
        }

        return { obj: tempObj, index: index };
    };

    calculatePills = (tagsObj, filter = []) => {
        const total = Object.keys(projects).length;
        let pills = [];

        if (filter.length !== 0) {
            let index = 0,
                filteredTagsObj = {};

            for (let key in projects) {
                // skip loop if the property is from prototype
                if (!projects.hasOwnProperty(key)) continue;

                const propKey = projects[key];
                let loopIndex = index;

                let filteredTagsObjs = checkTags(
                    propKey,
                    filteredTagsObj,
                    loopIndex,
                    filter
                );

                Object.assign(filteredTagsObj, filteredTagsObjs.obj);

                index = filteredTagsObjs.index;
            }

            pills.push(
                <Pill
                    id="All"
                    class={filter.length === 0 ? 'active' : null}
                    key="All"
                    label="All"
                    total={total}
                    color="black"
                />
            );

            for (var pillItem in tagsObj) {
                pills.push(
                    <Pill
                        id={pillItem}
                        class={filter.includes(pillItem) ? 'active' : null}
                        key={pillItem}
                        label={pillItem}
                        total={
                            filteredTagsObj[pillItem]
                                ? filteredTagsObj[pillItem].count
                                : '0'
                        }
                        color={tagsObj[pillItem].activeColor}
                    />
                );
            }

            return pills;
        }

        pills.push(
            <Pill
                id="All"
                class={filter.length === 0 ? 'active' : null}
                key="All"
                label="All"
                total={total}
                color="black"
            />
        );

        for (var pillItem in tagsObj) {
            pills.push(
                <Pill
                    id={pillItem}
                    class={filter.includes(pillItem) ? 'active' : null}
                    key={pillItem}
                    label={pillItem}
                    total={tagsObj[pillItem].count}
                    color={tagsObj[pillItem].activeColor}
                />
            );
        }

        return pills;
    };

    calculateCards = (filter, obj, tagsObj) => {
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
                        tagsObj={tagsObj}
                        tags={propKey['tags']}
                        desc={propKey['description']}
                    />
                );
            } else {
                cards.push(checkFilter(propKey, filter, key, tagsObj));
            }
        }

        return cards;
    };

    filterCards = (event) => {
        let el, tag, tagAll, inFilter, existFilter;

        //1. check if target is not the div that contains the pills
        if (event.target.classList.contains('pillsGroup')) return;

        //2. get tag
        if (event.target.parentNode.classList.contains('pill')) {
            el = event.target.parentNode;
        } else {
            el = event.target;
        }

        if (el.id === 'All') {
            tag = 'All';
            tagAll = true;
        } else {
            tag = el.id;
            tagAll = false;

            if (parseInt(el.children[0].innerText.split('')[1]) === 0) return;
        }

        //3. get filter
        existFilter = filter;

        if (tagAll) {
            existFilter = [];
        } else {
            // check if tag already exist in filter
            for (let i = 0; i < existFilter.length; i++) {
                const element = existFilter[i];

                if (element === tag) {
                    existFilter = existFilter.filter((item) => item !== tag);

                    inFilter = true;

                    break;
                }

                inFilter = false;
            }

            if (!inFilter) {
                existFilter.push(tag);
            }
        }

        //4. update filter
        setFilter(existFilter);

        //5. update pills
        setPills(calculatePills(tagsObj, existFilter));

        //6. update cards
        setCards(calculateCards(existFilter, projects, tagsObj));
    };

    checkFilter = (propKey, filter, key, tagsObj) => {
        for (let j = 0; j < propKey['tags'].length; j++) {
            for (let i = 0; i < filter.length; i++) {
                if (propKey['tags'][j] === filter[i]) {
                    return (
                        <Card
                            key={key}
                            title={key}
                            img={propKey['image']}
                            textColor={propKey['textColor']}
                            tagsObj={tagsObj}
                            tags={propKey['tags']}
                            desc={propKey['description']}
                        />
                    );
                }
            }
        }
    };

    //1. filter
    const [filter, setFilter] = useState([]);

    //2. generate tags object
    const tagsObj = calculateTags(filter);

    //3. check if info is correct: enough colors, description not too big or if all required tags are present
    checkRequired(projects, tagsObj);

    //4.generate pills
    const [pills, setPills] = useState(calculatePills(tagsObj));

    //5. generate cards
    const [cards, setCards] = useState(
        calculateCards(filter, projects, tagsObj)
    );

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
