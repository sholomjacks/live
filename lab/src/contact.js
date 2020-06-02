import React, { Component } from 'react';

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0px */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function logout() {
    const logout = window.confirm("Are you sure you want to log out?");
    if (logout) {
        localStorage.setItem("token", null);
        alert("You have successfully logged out of your padah account");
        window.location = "/";
    } else {
        // do nothing
    }
}


class Contact extends Component {
    render() {
        return (
            <>
                <span id="mySidenav" class="sidenav">
                    {// eslint-disable-next-line
                        <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                    {// eslint-disable-next-line
                        <a id="cursur" onClick={logout}>Logout</a>}
                    <a href="/admin">Admin Commands</a>
                     
                    <a href="/settings">Settings</a>
                    <a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                </span>
                <img alt="Hamburger Menu" id="cursur" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={openNav} />

                <span id="main">
                    <center>
                        <h1>Contact</h1>
                        <h2>Contact us at: <a href="mailto:info@padah.dev">info@padah.dev</a></h2>
                    </center>
                </span>
            </>
        );
    }
}

export default Contact;