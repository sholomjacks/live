import React from 'react'
import './background.css'
import './style.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './loader.css'
import { Growl } from 'primereact/growl'
import url from './url'
const axios = require('axios')

export class App extends React.Component {
    state = {
        username: '',
        password: '',
        view: 'password',
        render: false
    }

    constructor() {
        super();
        this.showSuccess = this.showSuccess.bind(this);
    }

    showSuccess() {
        //this.growl.show({ severity: 'success', summary: 'Logged In', detail: 'You have succesfully logged in to your PADAH account!' })
        alert("You have succesfully logged in to your PADAH account!")
    }

    componentDidMount = async () => {
        const token = await axios.post(`${url}/api/verify-token`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
        token.data.message ? window.location = '/intro' : this.setState({ render: true })
    }

    show = () => {
        if (this.state.view === 'password') {
            this.setState({ view: 'text' })
        } else {
            this.setState({ view: 'password' })
        }
    }

    login = async (username, password, url) => {
        const token = await axios.post(url, { username: username, password: password }).catch(err => alert(err))
        if (token.data.message !== "INVALID LOGIN") {
            localStorage.setItem("token", token.data.message)
            this.showSuccess()
            window.location = '/intro'
            
        } else {
            alert("Invalid login, you may not enter the secret world of PADAH...")
        }
    }

    render() {
        return (
            <>
                <Growl ref={(el) => this.growl = el} />
                {this.state.render ? <div class="skewed-bg">
                    <div class="content">
                        <div>
                            <a href="/signup" id="styleda" disabled>Sign Up</a>
                        </div>
                        <center>
                            <h1 class="big">Sign In</h1>
                            <input placeholder="Username" type="text" id="username" required onChange={(e) => { this.setState({ username: e.target.value }) }} />
                            <br />
                            <input id="password" placeholder="Password" type={this.state.view} required onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <br />
                            <img id="fontlc" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/18/eye-1-512.png" alt="Show Password" width="50" onClick={this.show} />
                            <br />
                            <button id="mystyledbutton" onClick={() => this.login(this.state.username, this.state.password, `${url}/api/login-token-generator`)}>Submit</button>
                        </center>
                    </div>
                </div> : <div class="center">
                        <div class="loader"></div>
                    </div>}
            </>
        )
    }
}

export default App;




