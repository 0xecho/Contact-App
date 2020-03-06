import Api from '../init'

export default {
    login: function (username, password) {
        return Api.post("auth/login", {
            username: username,
            password: password
        })

    },
    register: function (registrationData) {
        return Api.post("auth/register", registrationData)

    },
    getUserInfo: function () {
        return Api.get('/api/userinfo')
    },
    updateProfile: function (newUserData) {
        return Api.post('/api/updateProfile', newUserData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    }
}