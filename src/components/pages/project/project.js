import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { projects } from './../../../config/projects';

import Navbar from './../../shared/navbar';
import { BigImage } from './components/bigimage';
import SmallImage from './components/smallimage';
import Summary from './components/summary';
import { TextContent } from './components/textcontent';
import Banner from './components/banner';
import { scrollToRef } from '../../../logics/navigation';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export default function Project() {
    const query = useQuery(),
        company = query.get('name'),
        project = projects[company];

    //references
    const result = useRef(null),
        content = useRef(null);

    const generateLinks = () => {
        const menuLinks = {};

        menuLinks['Results'] = {
            ref: result,
        };

        menuLinks[project.content.title] = {
            ref: content,
        };

        return menuLinks;
    };

    return (
        <>
            <Navbar links={generateLinks()} action={scrollToRef} />
            <Banner
                banner={project.image}
                title={project.assignment}
                company={company}
                tags={project.tags}
            />
            <Summary title={project.assignment} desc={project.description} />

            <TextContent
                ref={content}
                title={project.content.title}
                left={{
                    title: project.content.left.title,
                    content: project.content.left.text,
                }}
                right={{
                    title: project.content.right.title,
                    content: project.content.right.text,
                }}
            />
            <BigImage ref={result} alt={company} img={project.image} />
            <SmallImage alt={company} img={project.image} />
        </>
    );
}
