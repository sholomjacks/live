/*     __                
______|__|_______ FROM ####          ####   #######
|     AWARD      |     ##  #         # ##   ##
|      FOR       |     ##   #       #  ##   ##
| LONGEST STATE  |     ##    #     #   ##   #######
\ (that is actua-/     ##     #   #    ##   ##
 \   lly used   /      ##      # #     ##   ##
  \____________/       ##       #      ##   #######                                                                                                                      */

import React from 'react'
const axios = require('axios')


function go() {
    alert('deleted command')
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
        activeGames: "",
        activeAdmin: "",
        activeHome: "",
    }

    runcmd = (e) => {
        if (e === 'Add Account') {
            this.setState({ addAccount: true })
        }
    }

    AddAccount = async () => {
        const response = await axios.post(`${url}/api/login-token-generator`, body, {headers:{Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2hvbG9tIn0sImlhdCI6MTU4Njc4Nzg1NX0.sHcsJYGJJcvSPg59JYbKS987hziOHqNJHO1E8aije_M'}})
        
    }

    show = () => {
        if (this.state.view === 'password') {
            this.setState({ view: 'text' })
        } else if (this.state.view === 'text') {
            this.setState({ view: 'password' })
        }
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


        if (this.state.addAccount === true) {
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
                    <label>
                        <input type="text" required value={this.state.usernamea} onChange={(e) => this.setState({ usernamea: e.target.value })} />
                        <div class="label-text">New username</div>
                    </label>
                    <br />
                    <br />
                    <label>
                        <input type={this.state.view} required value={this.state.passworda} onChange={(e) => this.setState({ passworda: e.target.value })} />
                        <div className="label-text">New password</div>
                    </label>
                    <img id="fontlc" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/18/eye-1-512.png" alt="Show Password" width="50" onClick={this.show} />
                    <br/>
                    <button onClick={this.gousername}>Add account</button>
                </main>
            )
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
                    <title>Admin Commands</title>
                    <label>
                        <input type="text" required value={this.state.cmd} onChange={(e) => { this.setState({ cmd: e.target.value }); this.state.cmd.toUpperCase() }} />
                        <div class="label-text">Command</div>
                    </label>

                    <br />
                    <br />
                    <button type="submit" onClick={() => this.runcmd(this.state.cmd)} >Run</button>
                    <button onClick={go}>Commands</button>
            </main>
        )
    }
}

export default Admin