import React from 'react'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// eslint-disable-next-line
import './loader.css'
import './background.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './notfound'
import GetStarted from './getStarted'
import Debug from './debug'
import Posts from './posts'
import Intro from './intro'
import Post from './post'
import Submit from './Submit'
import Matrix from './matrix'
import D from './dange'

class Routes extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/d" component={D} />
                        <Route exact path="/matrix" component={Matrix} />
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