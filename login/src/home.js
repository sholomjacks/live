import React, { Component } from 'react';
import './style.css'
import Url from './url'
import { Loader } from './loader'
const queryString = require('query-string')
const axios = require('axios')

class Home extends Component {

    state = {
        validating: true,
        username: null,
        welcomeMessage: null
    }

    componentDidMount = async () => {
        const token = queryString.parse(this.props.location.search).token
        const username = await axios.post(`${Url}/username`, { token: token })
        if (username.data.message) {
            this.setState({
                validating: false,
                username: username,
                welcomeMessage: `Welcome ${username.data.message} to the lab!`
            })
        } else {
            this.setState({
                validating: false
            })
        }

    }

    render() {
        return (
            <>
                {this.state.validating ? < Loader />
                    : !this.state.username ? <center><h1>You are not logged in. How about logging in <a href="https://padah.dev/">here?</a></h1></center>
                        :
                        <center>
                            <h1>{this.state.welcomeMessage}</h1>

                            <h2>Here you will be able to express your hacking skills</h2>
                        </center>
                }
            </>
        );
    }
}

export default Home;