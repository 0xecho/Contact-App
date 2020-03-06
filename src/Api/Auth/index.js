import Api from '../init'

export default {
    login: function(username, password) {
        console.log(Api);
        
        return Api.post("auth/login", {
             username: username, 
             password: password
        })
        
    }, 
    register: function(registrationData) {
        console.log(registrationData);
        
        return Api.post("auth/register", registrationData)
        
    },
    getUserInfo: function() {
        return Api.get('/api/userinfo')
    },
    updateProfile: function(newUserData){
        return Api.post('/api/updateProfile',newUserData,{
            headers: { 
                'content-type': 'multipart/form-data'
             }
        })
    }
}