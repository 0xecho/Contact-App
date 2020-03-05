<template>
  <v-container >
        <v-row>
        <v-btn icon link href="/contacts">
            <v-icon big>arrow_back</v-icon>
        </v-btn>
        </v-row>
       <v-row justify="center">
          <v-avatar
              size="300px"
              color="blue"
          >
              <img :src="contact.image" alt="alt">
          </v-avatar>
      </v-row>
      
      <br>
      
      <v-row justify="center">
        <div class="title">
            {{ name }}
        </div>
      </v-row>
      
      <v-row justify="center">
        <v-chip class="ma-2" v-for="(tag,i) in contact.tags" :key="i" color="green" @click="aqua(tag)">{{ tag }}</v-chip>
      </v-row>
      <v-flex>
          
      <v-row justify="center" >  
        <!-- <v-row  justify="center" width="500px"> -->
            <v-col xs12 lg6>
                <h3 class="subheading font-weight-medium">About</h3>
                <v-card flat height="150px">
                    <blockquote class="blockquote">
                        {{ contact.about }}
                    </blockquote>
                </v-card>
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-col xs12 lg6>
                <v-card class="ma-5" width="100%" height="50px" v-if="contact.phone_number">
                    <v-col>
                        <v-row class="ml-3 mr-1">
                            <span>Tel: </span>
                            <v-spacer></v-spacer>
                            <span>{{contact.phone_number}}</span>
                            <v-spacer></v-spacer>
                            <v-btn icon :href="'tel:'+contact.phone_number">
                                <v-icon color="green">mdi-phone</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-card>
                <v-card class="ma-5" width="100%" height="50px" v-if="contact.email">
                    <v-col>
                        <v-row class="ml-3 mr-1">
                            <span>Email: </span>
                            <v-spacer></v-spacer>
                            <span>{{ contact.email }}</span>
                            <v-spacer></v-spacer>
                            <v-btn icon :href="'mailto:'+contact.email">
                                <v-icon color="red">mdi-email</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-card>
                <v-card class="ma-5" width="100%" height="50px" v-if="contact.address">
                    <v-col>
                        <v-row class="ml-3 mr-1">
                            <span>Address: </span>
                            <v-spacer></v-spacer>
                            <span>{{ contact.address }}</span>
                            <v-spacer></v-spacer>
                            <v-btn icon :href="'https://www.openstreetmap.org/search?query='+contact.address" target="_blank">
                                <v-icon color="blue">mdi-map</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-card>
            </v-col>
        <!-- </v-row> -->
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>

import Api from '../Api/api'
// TODO: Use id param given to get a single user from db and display info here
export default {
    props : ["id"],
    data() {
        return {
            contact : {
            }
        }
    }, 
    async created () {
        await this.loadContact()
        
    },
    methods: {
        aqua: (tag) => {   
            alert(tag)
        },
        loadContact : async function(){
            const resp = await Api.getContacts(this.id)
            this.contact = resp.data
            this.contact.image = "http://127.0.0.1:8090/"+ this.contact.image.split('/').slice(-2).join('/')

        }
    },
    computed : {
        name: function() {
            return this.contact.firstname + " " + this.contact.lastname
        },
        
    }
    
}
</script>

<style>

</style>