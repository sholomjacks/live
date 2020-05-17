import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import Url from './url'
import './background.css'
const axios = require('axios')

class Singup extends Component {

    state = {
        username: "",
        password: ""
    }

    signup = async () => {
        console.log("Signing up")
        const body = {
            username: this.state.username,
            password: this.state.password
        }
        const res = await axios.post(`${Url}/signup`, body)
        console.log(res)
        if (res.data.message === "exists") {
            alert("Username Already Exists")
        } else {
            alert("Success!")
            window.location = '/home'
        }
    }

    render() { 
        return (
            <center>
                <h1>Signup</h1>
                <InputText id="in" value={this.state.value} placeholder="Username" onChange={(e) => this.setState({ username: e.target.value })} />
                <br/>
                <br/>
                <InputText id="in" value={this.state.value} placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                <br/>
                <br/>
                <Button label="Submit" onClick={this.signup} />
                <br/>
                <br/>
                <h4>Already have an account? Sign In <a href="/">here</a></h4>
            </center>
        );
    }
}
 
export default Singup;