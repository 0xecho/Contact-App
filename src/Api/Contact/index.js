import Api from '../init'

export default {
    addContact: function(formdata) {
        
        return Api.post("api/contact/add", formdata, {
             headers: { 
                'content-type': 'multipart/form-data'
             }
        })
    },
    getAllContacts: function(filters) {     
        
        let filter_string = ""
        if(filters.length){    
            filter_string += "?filter="
            for(let filter of filters)
            {   
                filter_string += filter + "," 
            }
        }
        return Api.get("api/contacts"+filter_string)
    },
    getContacts: function(id) {
        
        return Api.get("api/contact/" + id)
    }
}