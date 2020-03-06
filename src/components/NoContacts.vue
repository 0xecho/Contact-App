<template>
    <v-container>
        <v-row>
            <v-spacer></v-spacer>
                <v-col>
                    <div class="display-4 grey--text text--lighten-2 text-center">
                        No contacts found.
                    </div>
                    <v-card flat>
                        <v-card-actions class="justify-center">
                            <v-btn depressed link router to="/add">
                                <v-icon small left>person_add</v-icon>
                                <span>New Contact</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script>
import Api from '../Api/api'
export default {
  name: 'Home',
  props: ["filters"],
  data () {
      
      return {
          
        contacts : [], 
        loading: true,
        
        
    }
  },
  async mounted() {
    var that = this
    this.load_contacts(that)
    
  },
  methods: {
    load_contacts : async (that) => {
        let contacts = [] 
        await Api.getAllContacts(that.filters).then(function(resp){ 
            for(var i=0;i<resp.data.length;i++)
            {
                contacts.push(resp.data[i])
            }

        })
        that.loading = false
        contacts.forEach(contact=>{
            let name = contact.firstname + " " + contact.lastname
            let image = "http://127.0.0.1:8090/" + contact.image.split('/').slice(-2).join('/')
            let route = "/contact/" + contact._id
            console.log(image)
            that.contacts.push({
                name: name,
                image: image,
                route: route
            })
            
        })
        
    }
  },
  
}
</script>
