import React from 'react';
import './style.css'
import url from './url.js'
const base64 = require('base-64')
const axios = require('axios');


class SignUp extends React.Component {

    state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        view: 'password',
    }

    render() {
        const submit_submission = () => {
            var status = []
            if (this.state.username === '') status.push('username')
            if (this.state.password === '') status.push('password')
            if (this.state.email === '') status.push('email')
            if (status === []) {
                const id = base64.encode(Math.floor(Math.random() * 100))
                axios.post(`${url}/api/signup`, { username: this.state.username, password: this.state.password, email: this.state.email })
                alert(`Your submission ID is: ${id}`)
                window.location = '/signup/confirmed'
            } else {
                alert("Make sure to fill everything in before signing up!")
            }
        }
        return (
            <center>
                <h1 id="first">Sign Up</h1>
                <br />
                <br />
                <input placeholder="New Username" id="username" type="text" required onChange={(e) => { this.setState({ username: e.target.value }) }} />
                <br />
                <br />
                <input placeholder="New Password" id="username" type={this.state.view} required onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <br />
                <br />
                <input placeholder="E-mail Address" id="username" type="email" required onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <h1>Please Read Before Signing Up</h1>
                <p>
                    <br />  You will not forsure get an account.
                    <br />  This form will be sent to the PADAH team and
                    <br />  we will consider giving you an account.
                    <br />  Thank you for visiting,
                    <br />
                    <br />
                    <br />  from PADAH.
                </p>
                <br />
                <br />
                <button onClick={submit_submission} id="styleda">Sign Up</button>
            </center>
        )
    }
}

export default SignUp