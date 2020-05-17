import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login'
import Signup from './signup'
import Setup from  './setup'

class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/setup" component={Setup} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Routes;