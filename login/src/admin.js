/*     __                
______|__|_______ FROM ####          ####   #######
|     AWARD      |     ##  #         # ##   ##
|      FOR       |     ##   #       #  ##   ##
| LONGEST STATE  |     ##    #     #   ##   #######
\ (that is actua-/     ##     #   #    ##   ##
 \   lly used   /      ##      # #     ##   ##
  \____________/       ##       #      ##   #######    
       __
______|__|_______ FROM ####          ####   #######
|     AWARD      |     ##  #         # ##   ##
|      FOR       |     ##   #       #  ##   ##
| LONGEST FILE   |     ##    #     #   ##   #######
\                /     ##     #   #    ##   ##
 \_____________ /      ##      # #     ##   ##
                       ##       #      ##   #######                                                                                                    */

import React from 'react'
import './style.css'
import url from './url.js'
const axios = require('axios')

function go() {
    window.location = "/cmds"
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

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

class Admin extends React.Component {

    state = {
        cmd: '',
        go: false,
        track: false,
        usernamet: '',
        addAccount: false,
        usernamea: '',
        passworda: '',
        view: 'password',
    }

    runcmd = (e) => {
        if (e === 'Add Account') {
            this.setState({ addAccount: true })
        }
    }


    AddAccount = async () => {
        alert('Adding account...')
        const response = await axios.post(
            `${url}/api/add-account`,
            {
                "username": this.state.usernamea,
                "password": this.state.passworda
            },
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        )

        response.data.message ? alert("Account added successfully") : alert("You are not logged in to a PADAH account")
    }

    show = () => {
        if (this.state.view === 'password') {
            this.setState({ view: 'text' })
        } else if (this.state.view === 'text') {
            this.setState({ view: 'password' })
        }
    }

    render() {
        if (this.state.addAccount === true) {
            return (
                <>

                    <div id="mySidenav" class="sidenav">
                        {// eslint-disable-next-line
                            <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                        {// eslint-disable-next-line
                            <a id="cursur" onClick={logout}>Logout</a>}
                        <a href="/admin">Admin Commands</a>
                        <a href="/games">Games</a>
                        <a href="/settings">Settings</a>
                        <a href="/home">Home</a>
                        <a href="/contact">Contact</a>
                    </div>

                    <img alt="Hamburger Menu" id="cursur" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={openNav} />

                    <div id="main">
                        <center>
                            <input placeholder="Username" type="text" id="high" required value={this.state.usernamea} onChange={(e) => this.setState({ usernamea: e.target.value })} />
                            <br />
                            <br />
                            <input placeholder="Password" type={this.state.view} id="high" required value={this.state.passworda} onChange={(e) => this.setState({ passworda: e.target.value })} />
                            <br />
                            <br />
                            <img id="fontlc" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/18/eye-1-512.png" alt="Show Password" width="50" onClick={this.show} />
                            <br />
                            <button onClick={this.AddAccount}>Add account</button>
                        </center>
                    </div>
                </>
            )
        }
        return (
            <>
                <div id="mySidenav" class="sidenav">
                    {// eslint-disable-next-line
                        <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                    {// eslint-disable-next-line
                        <a onClick={logout}>Logout</a>}
                    <a href="/admin">Admin Commands</a>
                    <a href="/games">Games</a>
                    <a href="/settings">Settings</a>
                    <a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                </div>

                <img alt="Hamburger Menu" id="cursur" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={openNav} />

                <div id="main">
                    <center>
                        <input type="text" id="high" placeholder="Command" required value={this.state.cmd} onChange={(e) => { this.setState({ cmd: e.target.value }); this.state.cmd.toUpperCase() }} />
                        <br />
                        <br />
                        <button id="mystyledbutton" type="submit" onClick={() => this.runcmd(this.state.cmd)}>Run</button>
                        <button id="mystyledbutton" onClick={go}>Commands</button>
                    </center>
                </div>
            </>
        )
    }
}

export default Admin