import React, { useState } from 'react';
import { HashRouter as Router, Route } from '../src/index';
import { AnyObject } from '../src/index.d';

function Home() {
    return (
        <div>Home page</div>
    );
}

function Profile() {
    return (
        <div>Profile page</div>
    );
}

export default function App(props: AnyObject) {
    return (
        <Router>
            <div>
                <Route path='/home' component={Home} />
                <Route path='/profile' component={Profile} />
            </div>
        </Router>
    );
}