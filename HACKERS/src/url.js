var url

if (window.location.host !== "localhost:3001" && window.location.host !== "http://localhost:3000") {
    url = "https://hackers-padah.herokuapp.com"
} else {
    url = "http://localhost:4040"
}

export default url