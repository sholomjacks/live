import React from 'react'
import { Checkbox } from "primereact/checkbox";
import './style.css'
import './loader.css'
import './checkbox.css'

function checkbox() {
    var x = document.getElementById("show-again")
    console.log(x)
    if (x === true) {
        localStorage.setItem("intro", "no")
    } else {
        // do nothing
    }

    //window.location = '/home'
}

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

    render() {
        return (
            <> {this.state.render ? <center>
                <h1>Hello!</h1> <br /> <h2>welcome to the secret world of PADAH (Professional Agency of Detectives And Hackers).
            <br /> Now you will be directed to your Home Page.
            <br /></h2>

                <Checkbox id="show-again" tooltip="Don't show again" onChange={e => this.setState({checked: e.checked})} checked={this.state.checked}></Checkbox>

                <br />
                <br />

                <section className="button">
                    <button id="mystyledbutton" onClick={checkbox}>Go To Home</button>
                </section>
            </center> : <div class="center">
                    <div class="loader"></div>
                </div>}
            </>

        )
    }
}

export default top;