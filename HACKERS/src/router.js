import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './notfound'
import Intro from './intro'
import GetStarted from './getStarted'
import Debug from './debug'
import Posts from './posts'
import Post from './post'
import Submit from './Submit'

class Routes extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/debug/:postSub" component={Debug} />
                        <Route exact path="/submit/:postSub" component={Submit} />
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/posts/:postSub" component={Posts} />
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