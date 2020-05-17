import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './notfound'
import admin from './admin'
import cmds from './cmds'
import confirmed from './confirmed'
import top from './intro'
import Signin from './SignIn'
import Signup from './SignUp'
import usernames from './usernames'
import Users from './users'
import games from './games'
import Settings from './settings'
import Contact from './contact'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/home" component={Users} />
                    <Route exact path="/intro" component={top} />
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/admin" component={admin} />
                    <Route exact path="/cmds" component={cmds} />
                    <Route exact path="/admin/usernames" component={usernames} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signup/confirmed" component={confirmed} />
                    <Route exact path="/games" component={games} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;