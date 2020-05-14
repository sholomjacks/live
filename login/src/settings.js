/*     __
______|__|_______ FROM ####          ####   #######
|     AWARD      |     ##  #         # ##   ##
|      FOR       |     ##   #       #  ##   ##
| LONGEST FILE   |     ##    #     #   ##   #######
\                /     ##     #   #    ##   ##
 \_____________ /      ##      # #     ##   ##
                       ##       #      ##   #######
*/


import React from 'react'
import url from './url.js'
const axios = require('axios')

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// const submitall = () => {
//     const navSetting = document.getElementById("nav").checked

//     if (navSetting) {
//         localStorage.setItem("nav", true)
//     } else {
//         localStorage.setItem("nav", false)
//     }
//     alert("Preferences saved!")
// }

function show() {
    var modal = document.getElementById("myModal");

    modal.style.display = "block";
}

function close() {
    var modal = document.getElementById("myModal");

    modal.style.display = "none";
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

class Settings extends React.Component {
    state = {
        currentPw: '',
        newPassword: '',
        newPasswordConfirm: '',
        submitting: false,
        checked: false
    }

    componentDidMount() {
        const intro = localStorage.getItem("intro") || ''

        if(intro === "no") {
            this.setState({ checked: true })
        } else {
            // do nothing
        }
    }

    checkChange = (e) => {
        const checked = document.getElementById("show-again").checked
        this.setState({ checked: checked })
        const isChecked = this.state.checked
        !isChecked ? localStorage.setItem("intro", "no") : localStorage.setItem("intro", null)
    }

    changePw = async () => {
        this.setState({ submitting: true })
        const go = window.confirm("Are you sure you want to change your PADAH password?")
        if (go) {
            if (this.state.newPassword === this.state.newPasswordConfirm) {
                const isValid = await axios.post(`${url}/api/change-password`, { token: localStorage.getItem("token"), currentPassword: this.state.currentPw, password: this.state.newPassword })
                if (isValid.data.message !== null) {
                    alert("Succesfully change your PADAH account password!")
                    this.setState({
                        currentPw: '',
                        newPassword: '',
                        newPasswordConfirm: '',
                        submitting: false
                    })
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                } else {
                    alert("Invalid password")
                }
            } else {
                alert("Make sure both new passwords match before submitting!")
            }
        } else {
            this.setState({ currentPw: '' })
            this.setState({ newPasswordConfirm: '' })
            this.setState({ newPassword: '' })
            // eslint-disable-next-line
            var modal = document.getElementById("myModal")
            modal.style.display = "none";
        }
    }
    render() {
        return (
            <div id="blackb">
                {/* <span onClick={this.go()}></span> */}
                <div id="mySidenav" class="sidenav">
                    {// eslint-disable-next-line
                        <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                    {// eslint-disable-next-line
                        <a id="cursur" onClick={logout}>Logout</a>}
                    <a href="/admin">Admin Commands</a>
                    <a href="/games">Games</a>
                    <a href="/home">Home</a>
                    <a href="/settings">Settings</a>
                    <a href="/contact">Contact</a>
                </div>

                <img alt="Hamburger Menu" style={{ backgroundColor: "white" }} id="cursur" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={openNav} />

                <div id="main">
                    <center>
                        <div id="myModal" class="modal">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="close" onClick={close}>&times;</span>
                                    <h2>Change Password:</h2>
                                </div>
                                <div class="modal-body">
                                    <input id="password" type="password" value={this.state.currentPw} onChange={e => this.setState({ currentPw: e.target.value })} placeholder="Current Password" />
                                    <br />
                                    <input id="password" type="password" value={this.state.newPassword} onChange={e => this.setState({ newPassword: e.target.value })} placeholder="New Password" />
                                    <br />
                                    <input id="password" type="password" value={this.state.newPasswordConfirm} onChange={e => this.setState({ newPasswordConfirm: e.target.value })} placeholder="New Password (again)" />
                                </div>
                                <div class="modal-footer">
                                    {!this.state.submitting ? <button id="mystyledbutton" onClick={this.changePw}>Submit</button> : <button id="mystyledbutton" onClick={this.changePw}>Submitting...</button>}
                                </div>
                            </div>
                        </div>
                        <h1>Account Settings:</h1>
                        <button id="mystyledbutton" onClick={show}>Change Password</button>
                        {/* <h1>Preferences</h1>
                            <input type="checkbox" id="nav" />
                            <span>Start with the navigation bar navbar open</span>
                            <br/>
                            <br/>
                        <button id="mystyledbutton" onClick={submitall}>Save</button> */}
                        <h1>Preferences</h1>
                        <label>Don't Show Intro</label>
                        <input type="checkbox" id="show-again" title="Don't Show Intro" checked={this.state.checked} onChange={(e) => this.checkChange(e)} />
                    </center>
                </div>
            </div>
        );
    }
}

export default Settings;

