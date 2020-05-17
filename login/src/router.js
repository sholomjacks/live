import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login'

class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" component={Login} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Routes;