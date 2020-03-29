import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import admin from './admin'
import cmds from './cmds'
import confirmed from './confirmed'
import Contact from './contact'
import top from './intro'
import App from './SignIn'
import signup from './SignUp'
import usernames from './usernames'
import Users from './users'
import games from './games'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/home" component={Users} />
                <Route exact path="/intro" component={top} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={App} />
                <Route exact path="/admin" component={admin} />
                <Route exact path="/cmds" component={cmds} />
                <Route exact path="/admin/usernames" component={usernames} />
                <Route exact path="/signup" component={signup} />
                <Route path="/signup/confirmed" component={confirmed} />
                <Route exact path="/games" component={games} />
            </Router>
        )
    }
}

export default Routes