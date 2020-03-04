const axios = require('axios')

const additionalHeaders = {}

if(localStorage.user || localStorage.token)
{   
    additionalHeaders['x-access-token'] = localStorage.token
    additionalHeaders['user'] = localStorage.user
}

export default axios.create({
    baseURL: "http://127.0.0.1:8090",
    headers: additionalHeaders
})