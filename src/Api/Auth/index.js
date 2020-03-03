import Api from '../init'

export default {
    login: function(username, password) {
        console.log(Api);
        
        return Api.post("auth/login", {
             username: username, 
             password: password
        })
        
    }, 
}