import React, { useState } from 'react';
import { HashRouter as Router, Route, Redirect, Link, Switch } from '../src/index';
import { AnyObject } from '../src/index.d';

function Home() {
    return (
        <Router>
            <p>Home page</p>
            <Link to='/profile' />
        </Router>
    );
}

function Profile() {
    return (
        <div>
            <p>Profile page</p>
            <Link to='/' />
        </div>
    );
}

export default function App(props: AnyObject) {
    return (
        <Router>
            <div>
                <Route path='/' exact={true} component={Home} />
                <Route path='/profile' component={Profile} />
                <Redirect to='/' />
            </div>
        </Router>
    );
}