import React from 'react';
import { HashRouter as Router, Route, Redirect, Link, Switch } from '../src';

function Home() {
    return (
        <Router>
            <p>Home page</p>
        </Router>
    );
}

function Profile() {
    return (
        <div>
            <p>Profile page</p>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/profile'>Profile</Link>
                </div>
                <div>
                    <Switch>
                        <Route path='/' component={Home} />
                        <Route path='/profile' component={Profile} />
                        <Redirect to='/' />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}