import React from 'react'
import './style.css'
import './loader.css'
import './checkbox.css'

function checkbox() {
    var x = document.getElementById("checkbox").checked

    if (x === true) {
        localStorage.setItem("intro", "no")
    } else {
        // do nothing
    }

    window.location = '/home'
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
                <video width="700px" src="https://padah.dev/intro_vid.mp4" autoPlay controls></video>

                <br/>
                <br/>

                <label>Don't Show Again</label>
                <input type="checkbox" id="checkbox" onChange={e => this.setState({checked: e.checked})} />

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