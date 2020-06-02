import React, { Component } from 'react';

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

export class SideNav extends Component {
    render() {
        return (
            <div id="mySidenav" class="sidenav">
                {// eslint-disable-next-line
                    <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                {// eslint-disable-next-line
                    <a id="cursur" onClick={logout}>Logout</a>}
                {this.props.admin ? <a href="/admin">Admin Commands</a> : null}
                 
                <a href="/settings">Settings</a>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
            </div>
        );
    }
}