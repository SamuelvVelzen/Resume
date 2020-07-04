import React from 'react';
import { useLocation } from 'react-router-dom';

import { projects } from './../../../config/projects';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export default function Project() {
    let query = useQuery();

    console.log(projects[query.get('name')]);

    return <div>{query.get('name')}</div>;
}
