import React from 'react'
import url from './url.js'
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
        const usernamee = await axios.post(`${url}/api/username`, { token: localStorage.getItem("token") })
        this.setState({ welcomeMessage: `Welcome, ${usernamee.data.username}!` })
    }

    state = {
        welcomeMessage: null
    }

    render() {
        return (
            <>
                { this.state.welcomeMessage ? <><div id="mySidenav" class="sidenav">
                    {// eslint-disable-next-line
                        <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                    <img style={{ borderRadius: "50%", marginLeft: "50px", display: "block" }} width="110px" src="https://hackernoon.com/hn-images/1*TYAzzTJ60x-qg5N81ElU9A.png" alt="profile" />
                    {// eslint-disable-next-line
                        <a id="cursur" onClick={logout}>Logout</a>}
                    <a href="/admin">Admin Commands</a>
                    <a href="/games">Games</a>
                    <a href="/settings">Settings</a>
                    <a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                </div>

                <img alt="Hamburger Menu" id="cursur" style={{ backgroundColor: "white" }} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={openNav} />

                <span id="main">
                    <center>
                        <h1 id="al1" style={{ fontSize: "3rem", color: "white" }}>{this.state.welcomeMessage}</h1>
                        {/*<button id="mystyledbutton" onClick={show}>Show</button>*/}
                        <p id="lol"></p>
                    </center>
                </span> </>: <div class="center">
                        <div class="loader"></div>
                    </div>}
            </>
        )
    }
}

export default Users