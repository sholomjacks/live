import React from 'react';
import Url from './url'
import './table.css'
import './typewriter.css'
const axios = require('axios')

class getStarted extends React.Component {
    state = {
        welcomeMessage: null,
        typing: true,
        logged_in: false,
        validating: true,
        table: ""
    }

    componentDidMount = async () => {
        document.title = "PADAH - HACKERS"
        if (localStorage.getItem("logged_in") !== "false" && localStorage.getItem("token")) {
            const usernamea = await axios.post(`${Url}/username`, { token: localStorage.getItem("token") })

            const table = await axios.post(`${Url}/table`, { token: localStorage.getItem("token") })

            this.setState({
                welcomeMessage1: `Hello ${usernamea.data.username} and welcome to PADAH - Hackers! `,
                welcomeMessage2: "Here you will learn how to get started with PADAH - HACKERS!",
                logged_in: true,
                validating: false,
                table: table.data
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
                        <>
                            NOT LOGGED IN
                        </>
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
                                            <th>Profile Picture</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.table.message.map((x) => {
                                            if (x === this.state.table.username) {
                                                return <tr><td>{`${x} (You)`}</td><td>Yes</td></tr>
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

                                    <table style={{ width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Online</th>
                                                <th>Profile Picture</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.table.message.map((x) => {
                                                if (x === this.state.table.username) {
                                                    return <tr><td>{`${x} (You)`}</td><td>Yes</td></tr>
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