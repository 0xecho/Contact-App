import Api from './init'

import Auth from './Auth'

function persist_user(token, username) {
    Api.defaults.headers.common['x-access-token'] = token
    Api.defaults.headers.common['user'] = username
}

let endpoints = { persist_user }

endpoints = {...endpoints, ...Auth}


export default endpoints