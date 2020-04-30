import React from 'react'
import './style.css'
import './loader.css'

function checkbox() {
    var x = document.getElementById("one").checked
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
        render: false
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

                <section className="Show-again">
                    <input id='one' type='checkbox' />
                    <label for='one'>
                        Don't Show Again
                    </label>
                </section>

                <br/>

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