import React from 'react'
import './games.css'

export default class Games extends React.Component {

    state = {
        activeGames: "",
        activeAdmin: "",
        activeHome: ""
    }

    render() {

        switch (window.location) {
            case '/admin':
                if (this.state.activeAdmin !== "active") this.setState({ activeAdmin: "active" })
                break;

            case '/games':
                if (this.state.activeGames !== "active") this.setState({ activeGames: "active" })
                break;

            default:
                if (this.state.activeHome !== "active") this.setState({ activeHome: "active" })
                break;
        }

        return (
            <main class="main">
                <aside class="sidebar">
                    <nav class="nav">
                        <ul>
                            <li class={this.state.activeAdmin}><a href="/admin">Admin Commands</a></li>
                            <li class={this.state.activeGames}><a href="/games">Games</a></li>
                            <li class={this.state.activeGames}><a href="/home">Home</a></li>
                        </ul>
                    </nav>
                </aside>
                <h1>Games</h1>
                <br />
                <h2>
                Games will be coming soon....<br />
                for now you can join roblox <a href="https://www.roblox.com" rel="noopener noreferrer" target="_blank" id="bk">here!</a>
                </h2>
            </main>
        )
    }
}