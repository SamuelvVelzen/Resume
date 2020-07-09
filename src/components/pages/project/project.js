import React from 'react';
import { useLocation } from 'react-router-dom';

import { projects } from './../../../config/projects';

import Navbar from './../../shared/navbar';
import BigImage from './components/bigimage';
import SmallImage from './components/smallimage';
import Summary from './components/summary';
import TextContent from './components/textcontent';
import Banner from './components/banner';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export default function Project() {
    const query = useQuery(),
        company = query.get('name'),
        project = projects[company];

    return (
        <>
            <Navbar />
            <Banner
                banner={project.image}
                title={project.assignment}
                company={company}
                tags={project.tags}
            />
            <Summary title={project.assignment} desc={project.description} />

            <TextContent
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
            <BigImage alt={company} img={project.image} />
            <SmallImage alt={company} img={project.image} />
        </>
    );
}
