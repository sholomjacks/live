var url

if (window.location.host !== "localhost:3001" && window.location.host !== "http://localhost:3000") {
    url = "https://developers-padah"
} else {
    url = "http://localhost:4040"
}

export default url