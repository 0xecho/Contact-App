<template>

    
    <v-layout row wrap>
        <template v-if="contacts.length > 0">
            <v-flex xs12 sm6 md3 lg2 >
                <v-card flat class="text-center ma-5 ml-10 mr-10" width="auto">
                    <v-responsive class="pt4">
                        <v-avatar
                            size="100"
                            color="red"
                        >
                            <img src="/add_user.png" alt="alt">
                        </v-avatar>
                    </v-responsive>
                    <v-card-actions class="justify-center">
                        <div>
                            <v-btn link router to="/add">
                                <v-icon small left>person_add</v-icon>
                                <span>New Contact</span>
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3 lg2 v-for="(contact,i) in contacts" :key="i" >
                <v-card class="text-center ma-3" shaped>
                    <v-responsive class="pt4">
                        <v-avatar
                            size="100"
                            color="red"
                        >
                            <img :src="contact.image" alt="alt">
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="body-1">{{contact.name}}</div>
                    <v-card-actions class="justify-center">
                        <v-btn text color="light" link router :href="contact.route">
                        <span>View Contact</span>
                        </v-btn>
                    </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-flex>
        </template>
        <template v-else> 
            <v-row justify="center">
                <v-flex>
                    <v-col align="center" style="height: 100%">
                        <v-progress-circular
                          size="70"
                          width="3"
                          indeterminate
                        ></v-progress-circular>
                    </v-col>
                </v-flex>
            </v-row>
        </template>
    </v-layout>

</template>

<script>
// TODO: Fetch all contacts from database and display them
import Api from '../Api/api'
export default {
  name: 'Home',
  props: ["filters"],
  data () {
      
      return {
          
          contacts : [
                        
        ]
        
    }
  },
  async mounted() {
    var that = this
    this.load_contacts(that)
  },
  methods: {
    load_contacts : async (that) => {
        let contacts = [] 
        await Api.getAllContacts().then(function(resp){
                   
            // resp.data.forEarch(function(contact){
            //     this.contacts.push(contact)
            // })
            
            for(var i=0;i<resp.data.length;i++)
            {
                contacts.push(resp.data[i])
            }

        })
        
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
