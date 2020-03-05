import Api from '../init'

export default {
    addContact: function(formdata) {
        
        return Api.post("api/contact/add", formdata, {
             headers: { 
                'content-type': 'multipart/form-data'
             }
        })
    },
    getAllContacts: function() {
        
        return Api.get("api/contacts")
    },
    getContacts: function(id) {
        
        return Api.get("api/contact/" + id)
    }
}