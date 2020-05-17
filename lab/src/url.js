var url

if (window.location.host !== "localhost:3001" && window.location.host !== "localhost:3000") {
    url = "https://login-padah.herokuapp.com"
} else {
    url = "http://localhost:4041"
}

export default url