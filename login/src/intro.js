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
                <video width="700px" src="https://ak02-video-cdn.slidely.com/promoVideos/videos/5e/b9/5eb9e76e861eda5c6316d3bc/preview.mp4?dv=1" autoPlay></video>
                <h1>Hello!</h1> <br /> <h2>welcome to the secret world of PADAH (Professional Agency of Detectives And Hackers).
            <br /> Now you will be directed to your Home Page.
            <br /></h2>

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