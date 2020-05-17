const axios = require('axios')
const ur = 'https://sheltered-ocean-75748.herokuapp.com/api/login'
const url = 'http://localhost:8080'
const body = {
    username: 'sholom',
    password: 'jacks'
}

const runner = async () => {
    var test = await axios.post(`${url}/api/login-token-generator`, body, {headers:{Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2hvbG9tIn0sImlhdCI6MTU4Njc4Nzg1NX0.sHcsJYGJJcvSPg59JYbKS987hziOHqNJHO1E8aije_M'}})


    console.log(test.data)
}

runner()



