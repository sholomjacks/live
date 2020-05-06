import React from 'react';
import Url from './url'
import './table.css'
import { Button } from 'primereact/button'
const axios = require('axios')

class getStarted extends React.Component {
    state = {
        welcomeMessage: null,
        typing: true,
        logged_in: false,
        validating: true,
        table: "",      
        profiePic: "",
        postID: 1234,
        subject: "TEST"
    }

    go(href) {
        window.location = href
    }

    componentDidMount = async () => {
        document.title = "PADAH - HACKERS"
        if (localStorage.getItem("logged_in") !== "false" && localStorage.getItem("token")) {
            const usernamea = await axios.post(`${Url}/username`, { token: localStorage.getItem("token") })

            const table = await axios.post(`${Url}/table`, { token: localStorage.getItem("token") })

            const profilePic = await axios.post(`${Url}/getProfile`, { token: localStorage.getItem("token") })

            this.setState({
                welcomeMessage1: `Hello ${usernamea.data.username} and welcome to the posts page!`,
                welcomeMessage2: null,
                logged_in: true,
                validating: false,
                table: table.data,
                profilePic: profilePic.data
            })

        } else {
            this.setState({
                validating: false,
                logged_in: false
            })
        }
    }

    render() {
        return (
            <>
                {this.state.validating ?
                    <div class="center">
                        <div class="loader"></div>
                    </div>
                    : !this.state.logged_in ?
                        <center style={{ backgroundColor: "lightgreen" }}>
                            NOT LOGGED IN
                        </center>
                        :
                        this.state.welcomeMessage && this.state.logged_in ?




                            <center style={{ backgroundColor: "lightgreen", }}>

                                <div className="typewriter">
                                    <h1>{this.state.welcomeMessage}</h1>
                                </div>

                                <br />
                                <br />

                                <table style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Online</th>
                                            <th>Signed In</th>
                                            <th>Profile Picture</th>
                                            <th>Awnser</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.table.message.map((x) => {
                                            if (x === this.state.table.username) {
                                                return <tr>
                                                    <td>{`${x} (You)`}</td>
                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                    <td></td>
                                                    <td></td>
                                                    </tr>
                                            } else {
                                                return <tr><td>{x}</td></tr>
                                            }
                                        })}
                                    </tbody>
                                </table>
                            </center>

                            : this.state.logged_in === true ?
                                <center style={{ backgroundColor: "lightgreen" }}>

                                    <div className="typewriter">
                                        <h1>{this.state.welcomeMessage1}{this.state.welcomeMessage2}</h1>
                                    </div>

                                    <br />
                                    <br />

                                    <Button label="Post" onClick={() => this.go("/post")} />

                                    <table style={{ width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>User Name</th>
                                                <th>Post ID</th>
                                                <th>Subject</th>
                                                <th>Profile Picture</th>
                                                <th>Awnser</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.table.message.map((x) => {
                                                if (x === this.state.table.username) {
                                                    return <tr>
                                                        <td>{`${x} (You)`}</td>
                                                        <td>{this.state.postID}</td>
                                                        <td>{this.state.subject}</td>
                                                        <td><img src={this.state.profilePic.url} width="100px" alt="Profile" /></td>
                                                        <td><Button onClick={() => window.location = `/posts/${this.state.postID}`} label="Awnser" className="p-button-raised p-button-secondary" /></td></tr>
                                                } else {
                                                    return <tr><td>{x}</td></tr>
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                </center>
                                : null
                }
            </>
        );
    }
}

export default getStarted;