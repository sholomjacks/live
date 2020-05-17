import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login'
import Setup from "./setup"

class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/setup" component={Setup} />
                        <Route exact path="/" component={Login} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Routes;