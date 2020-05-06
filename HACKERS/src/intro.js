import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import './loader.css'
import './background.css'
import Url from './url.js'
const axios = require('axios')

const body = {
    href: window.location.href
}

class Intro extends Component {
    state = {
        welcomeMessage: null,
        logged_in: false,
        validating: true
    }

    componentDidMount = async () => {
        if (localStorage.getItem("logged_in") !== "false" && localStorage.getItem("token")) {
            const usernamea = await axios.post(`${Url}/username`, { token: localStorage.getItem("token") })

            this.setState({
                welcomeMessage: `Welcome ${usernamea.data.username} to PADAH - Hackers!`,
                logged_in: "local storage yes",
                validating: false
            })

        } else {
            this.setState({ validating: true })
            const token = await axios.post(`${Url}/beginner-token`, body).catch(err => console.warn("IDK", err))
            console.log("token: " + token.data.token)
            localStorage.setItem("token", token.data.token)
            const logged_in = await axios.post(`${Url}/username`, { token: localStorage.getItem("token") }, { headers: { authorization: `Bearer ${localStorage.getItem("token")}` } })
            console.log(`Logged in: ${logged_in.data.username}`)
            if (logged_in.data.username) {
                const username = logged_in.data.username
                const welcomeMessage = `Welcome ${username} to PADAH - Hackers!`
                this.setState({ logged_in: true })
                this.setState({ welcomeMessage: welcomeMessage })
                this.setState({ validating: false })
                localStorage.setItem("logged_in", true)
            } else if (logged_in.data.message === false || logged_in.data.message === undefined) {
                this.setState({
                    logged_in: false,
                    validating: false
                })
                localStorage.setItem("logged_in", false)
            }
        }
    }

    getStarted() {
        window.location = "/getstarted"
    }

    render() {
        return (<>
            {
                this.state.validating ?

                    <div class="center" >
                        <div class="loader"></div>
                    </div>
                    : !this.state.logged_in ?
                        <center style={{ backgroundColor: "lightgreen" }} >
                            NOT LOGGED IN
                        </center>
                        : this.state.welcomeMessage && this.state.logged_in ?
                            <center style={{ backgroundColor: "lightgreen" }} >
                                <div className="typewriter">
                                    <h1>{this.state.welcomeMessage}</h1>
                                </div>
                                <Button label="Get Started" className="p-button-success" onClick={this.getStarted} />
                            </center>
                            : this.state.logged_in === "local storage yes" ?
                                <center style={{ backgroundColor: "lightgreen" }} >
                                    <h1>{this.state.welcomeMessage}</h1>
                                </center>
                                : null
            }
        </>
        );
    }
}

export default Intro;