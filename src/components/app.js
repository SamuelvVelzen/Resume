import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Introduction from './pages/introduction';
import Error from './pages/error';
import Contact from './pages/contact';

export default function App() {
    return (
        <>
            <div className="content" key="content">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Introduction} />
                        <Route path="*" component={Error} />
                    </Switch>
                </Router>
            </div>

            <div className="footer" key="footer">
                <Contact />
            </div>
        </>
    );
}
