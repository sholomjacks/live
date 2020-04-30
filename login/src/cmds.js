import React from 'react'

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function logout() {
    const logout = window.confirm("Are you sure you want to log out?")

    if (logout) {
        localStorage.setItem("token", null)
        alert("You have successfully logged out of your padah account")
        window.location = "/"
    } else {
        // do nothing
    }
}

class cmds extends React.Component {

    go = () => {
        if (localStorage.getItem("nav") === "true") {
            const navbar = document.getElementById("mySidenav") || null
            navbar ? navbar.style.width = "250px" : console.log()
        } else {
            // do nothing
        }
    }

    render() {
        return (
            <>
                <span onClick={this.go()}></span>
                <div id="mySidenav" class="sidenav">
                    {// eslint-disable-next-line
                        <span id="cursur" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</span>}
                    {// eslint-disable-next-line
                        <a id="cursur" onClick={logout}>Logout</a>}
                    <a href="/admin">Admin Commands</a>
                    <a href="/games">Games</a>
                    <a href="/settings">Settings</a>
                    <a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                </div>

                <img alt="Hamburger Menu" id="cursur" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={openNav} />

                <div id="main">
                    <center>
                        <h1 id="first">Commands:</h1>
                        <h2 id="firstl">
                            <br /><br />AddAcount: Will ask for username and password wich will become a new account.
                            <br /><br />*COMING SOON* DeleteAccount: Will ask for account name and then delete that account.
                            <br /><br />*COMING SOON* Track: Will ask for the persons username and then track what he is doing.
                        </h2>
                    </center>
                </div>
            </>
        )
    }
}

export default cmds