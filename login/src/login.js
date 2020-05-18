import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext';
import Url from './url'
const axios = require('axios')

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    submitLogin = async () => {
        const body = {
            username: this.state.value,
            password: this.state.password
        }
        const res = await axios.post(`${Url}/login-token-generator`, body)
        console.log(res)
        localStorage.setItem("token", res.data.message)
    }

    render() {
        return (
            <center>
                <h1>Login</h1>
                <InputText value={this.state.value} placeholder="Username" onChange={(e) => this.setState({ username: e.target.value })} />
                <br/>
                <br/>
                <InputText value={this.state.value} placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                <br/>
                <br/>
                <Button label="Submit" onClick={this.submitLogin} />
                <h4>Don't yet have an account? Sign Up <a href="/signup">here</a></h4>
            </center>
        );
    }
}

export default Login;