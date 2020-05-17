import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home'
import './background.css'
import NotFound from './notfound'

class Routers extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Routers;