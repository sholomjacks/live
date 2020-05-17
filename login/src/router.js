import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login'
import Signup from './signup'
import './background.css'

class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/signup" component={Signup} />

                        <Route path="/" component={Login} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Routes;