import React, { Component } from 'react';

export class SideNav extends Component {
    render() {
        return (
            <div id="mySidenav" class="sidenav">
                {// eslint-disable-next-line
                    <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                {// eslint-disable-next-line
                    <a id="cursur" onClick={logout}>Logout</a>}
                {this.props.admin ? <a href="/admin">Admin Commands</a> : null}
                <a href="/games">Games</a>
                <a href="/settings">Settings</a>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
            </div>
        );
    }
}