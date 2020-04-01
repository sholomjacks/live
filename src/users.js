import React from 'react'
import './home.css'
// function go(location) {
//     var hash = localStorage.getItem("hash")
//     if (hash !== null) {
//         window.location = location
//     }
// }

class Users extends React.Component {

    state = {
        activeGames: "",
        activeAdmin: "",
        activeHome: ""
    }

    render() {

        switch (window.location) {
            case '/admin':
                if(this.state.activeAdmin !== "active") this.setState({activeAdmin: "active"})
            break;
            
            case '/games': 
            if(this.state.activeGames !== "active") this.setState({activeGames: "active"})
            break;

            default:
                if(this.state.activeHome !== "active") this.setState({activeHome: "active"})
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

                <section class="twitter">
                    <div class="container">
                        <h1 id="high">Welcome, User!</h1>
                    </div>
                </section>
            </main>
        )
    }
}
export default Users