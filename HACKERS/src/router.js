import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './notfound'
import Intro from './intro'
import GetStarted from './getStarted'
import Awnser from './awnser'
import Post from './post'

class Routes extends React.Component {
    render() {
        return (
            <>
            <Router>
                <Switch>
                    <Route exact path="/post" component={Post} />
                    <Route exact path="/posts/:postID" component={Awnser} />
                    <Route exact path="/posts" component={GetStarted} />
                    <Route exact path="/" component={Intro} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
            </>
        )
    }
}

export default Routes;