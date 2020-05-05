import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './notfound'
import Intro from './intro'
import GetStarted from './getStarted'
// import Checkbox from'./checkbox';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route exact path="/getstarted" component={GetStarted} />
                    {/* <Route exact path="/checkbox" component={Checkbox} /> */}
                    <Route component={Notfound} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;