import React from 'react'
import {Chart} from 'primereact/chart';
import url from './url.js'
import './tab.css'
const axios = require('axios')

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
// eslint-disable-next-line
const show = async () => {
    const notifications = await axios.post(`${url}/api/notifications`, { token: localStorage.getItem("token") })
        .catch(err => console.error(err))

    const count = await axios.post(`${url}/api/count-notifications`)
        .catch(err => console.error(err))
    console.log("Notifications: " + notifications + "Count: " + count)
    switch (count) {
        case 0:
            document.getElementById("lol").innerHTML = `
            E-mail: ${notifications.data.notifications.email}
            <br/> 
            Username: ${notifications.data.notifications.username}`
            break;
        case 1:
            document.getElementById("lol").innerHTML = `Submission 1: E-mail: ${notifications.data.notifications.VERIFICATION.email}
            <br/>
            Submission 1: Username: ${notifications.data.notifications.VERIFICATION.username}
            <br/>
            <br/>
            Submission 2: Username: ${notifications.data.notifications.VERIFICATION1.username}
            <br/>
            Submission 2: E-mail: ${notifications.data.notifications.VERIFICATION1.email}
            `
            break;
        case 2:
            document.getElementById("lol").innerHTML = `Submission 1: E-mail: ${notifications.data.notifications.VERIFICATION.email}
            <br/>
            Submission 1: Username: ${notifications.data.notifications.VERIFICATION.username}
            <br/>
            <br/>
            Submission 2: Username: ${notifications.data.notifications.VERIFICATION1.username}
            <br/>
            Submission 2: E-mail: ${notifications.data.notifications.VERIFICATION1.email}
            <br/>
            <br/>
            Submission 3: Username: ${notifications.data.notifications.VERIFICATION2.username}
            <br/>
            Submission 3: E-mail: ${notifications.data.notifications.VERIFICATION2.email}
            <br/>
            <br/>
            `
            break;
        case 3:
            document.getElementById("lol").innerHTML =
                `<div>
            Submission 1: E-mail: ${notifications.data.notifications.VERIFICATION.email}
            <br/>
            Submission 1: Username: ${notifications.data.notifications.VERIFICATION.username}
            </div>
            <br/>
            <br/>
            Submission 2: Username: ${notifications.data.notifications.VERIFICATION1.username}
            <br/>
            Submission 2: E-mail: ${notifications.data.notifications.VERIFICATION1.email}
            <br/>
            <br/>
            Submission 3: Username: ${notifications.data.notifications.VERIFICATION2.username}
            <br/>
            Submission 3: E-mail: ${notifications.data.notifications.VERIFICATION2.email}
            <br/>
            <br/>
            Submission 4: Username: ${notifications.data.notifications.VERIFICATION3.username}
            <br/>
            Submission 4: E-mail: ${notifications.data.notifications.VERIFICATION3.email}
            `
            break;
        default: break;
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function logout() {
    const logout = window.confirm("Are you sure you want to log out?")

    if (logout) {
        localStorage.setItem("token", null)
        alert("You have successfully logged out of your padah account")
        window.location = "/"
    } else {
        // do nothing
    }
}

class Users extends React.Component {

    componentDidMount = async () => {
        const chartData = await axios.post(`${url}/api/chartData`, { token: localStorage.getItem("token") } )
        const username = await axios.post(`${url}/api/username`, { token: localStorage.getItem("token") })
        this.setState({ welcomeMessage: `Welcome, ${username.data.username}!`, chartData: chartData.data.message })
    }

    state = {
        welcomeMessage: null,
        chartData: null
    }

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'All Of PADAH\'s Sales',
                    backgroundColor: '#42A5F5',
                    data: this.state.chartData
                },
                {
                    label: 'Sales You Took Part Of',
                    backgroundColor: '#9CCC65',
                    data: [1, 0, 0, 0, 0, 0, 0]
                }
            ]
        };
        return (
            <>
                { this.state.welcomeMessage && this.state.chartData ? <><div id="mySidenav" class="sidenav">
                    {// eslint-disable-next-line
                        <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                    <img style={{ borderRadius: "50%", marginLeft: "50px", display: "block" }} width="110px" src="https://hackernoon.com/hn-images/1*TYAzzTJ60x-qg5N81ElU9A.png" alt="profile" />
                    {// eslint-disable-next-line
                        <a id="cursur" onClick={logout}>Logout</a>}
                    <a href="/admin">Admin Commands</a>
                    <a href="/settings">Settings</a>
                    <a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                </div>

                <img alt="Hamburger Menu" id="cursur" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={openNav} />

                <span id="main">
                    <center>
                        <h1 id="al1" style={{ fontSize: '3rem' }}>{this.state.welcomeMessage}</h1>
                        <p id="lol"></p>
                        {this.state.chartData !== "null" ? 
                            <div class="warpper">
                              <input class="radio" id="one" name="group" type="radio" checked/>
                              <input class="radio" id="two" name="group" type="radio"/>
                              <input class="radio" id="three" name="group" type="radio"/>
                              <div class="tabs">
                              <label class="tab" id="one-tab" for="one">Sales You Took Part Of</label>
                              <label class="tab" id="two-tab" for="two">All Of PADAH's Sales</label>
                                </div>
                              <div class="panels">
                              <div class="panel" id="one-panel">
                              <Chart type="bar" data={data} /> 
                              </div>
                              <div class="panel" id="two-panel">
                              </div>
                              </div>
                            </div>
                            
                            // 
                            
                            :
                            
                            <h1>No Sales Yet!</h1>}
                    </center>
                </span> </>: <div class="center">
                        <div class="loader"></div>
                    </div>}
            </>
        )
    }
}

export default Users