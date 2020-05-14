import React from 'react'
import './style.css'

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
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

export default class Games extends React.Component {

    go = () => {
        if (localStorage.getItem("nav") === "true") {
            const navbar = document.getElementById("mySidenav") || null
            navbar ? navbar.style.width = "250px" : console.log()
        } else {
            // do nothing
        }
    }

    render() {
        return (
            <>
                <span onClick={this.go()}></span>
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

                <img alt="Hamburger Menu" style={{ backgroundColor: "white" }} id="cursur" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={openNav} />

                <span id="main">
                    <center>
                        <h1>Games</h1>
                        <br />
                        <h2>Games will be coming soon....</h2>
                    </center>
                </span>
            </>
        )
    }
}