import React from 'react'
import { Checkbox } from "primereact/checkbox";
import './style.css'
import './loader.css'
import './checkbox.css'

class top extends React.Component {

    state = {
        href: '',
        render: false,
        checked: false
    }

    componentDidMount() {
        var ifState = localStorage.getItem("intro") || ''

        if (ifState === "no") {
            window.location = '/home'
        } else {
            this.setState({ render: true })
        }
    }

    checkbox = () => {
        var x = this.state.checked
        if (x === true) {
            localStorage.setItem("intro", "no")
        } else {
            // do nothing
        }
    
        window.location = '/home'
    }

    render() {
        return (
            <> {this.state.render ? <center>
                <h1>Hello!</h1> <br /> <h2>Welcome To the Secret World of PADAH (Professional Agency of Detectives And Hackers).
            <br /> Now you will be directed to your Home Page.
            <br /></h2>

                <video src="https://lab.padah.dev/intro_vid.mp4" autoPlay controls></video>

                <br/>
                <br/>

                <Checkbox id="show-again" tooltip="Don't show again" onChange={e => this.setState({checked: e.checked})} checked={this.state.checked}></Checkbox>

                <br />
                <br />

                <section className="button">
                    <button id="mystyledbutton" onClick={this.checkbox}>Go To Home</button>
                </section>
            </center> : <div class="center">
                    <div class="loader"></div>
                </div>}
            </>

        )
    }
}

export default top;