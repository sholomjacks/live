const { connect } = require('redibase')
const redibase = connect('redis://h:p2fb3ed986f821985a7eb1fa1d47bbc999abcf0f9ea689280c19ab1caac7a73e9@ec2-52-3-191-79.compute-1.amazonaws.com:18969')
module.exports = { redibase }
