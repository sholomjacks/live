import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './notfound'
import Intro from './intro'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;