<template>
    <v-container>
      <Navbar />
      <v-container class="mt-12">
            <v-row>
                <v-spacer></v-spacer>
                <div class="display-1 font-weight-light">Edit contact</div>
                <v-spacer></v-spacer>
            </v-row>
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
            <div>
                <v-text-field
                    name="fullname"
                    label="Full Name"
                ></v-text-field>
            </div>
          </v-row>
          
          <v-row justify="center">
            <v-chip class="ma-2" close v-for="(tag,i) in contact.tags" :key="i" :color="tag.color" @click="filterByTag(tag)">{{ tag.tag_name }}</v-chip>
            <v-btn small icon class="success mt-2">
                <br>
                <v-icon >mdi-plus</v-icon>
            </v-btn>
          </v-row>
          <v-flex>
              
          <v-row justify="center" >  
            <!-- <v-row  justify="center" width="500px"> -->
                <v-col width="100%">
                    <v-textarea
                        label="About"
                        name="about"
                    >
                    </v-textarea>
                </v-col>
            <!-- <v-spacer></v-spacer> -->
                <v-col width="100%">
                    <v-card class="ma-5" width="100%" height="50px" v-if="contact.phone_number">
                        <v-col>
                            <v-row class="ml-3 mr-3" ref="phone">
                                <span>Tel: </span>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    dense
                                    name="phone_number"
                                    label="Phone Number"
                                    id="id"
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-btn icon color="red" :href="'mailto:'+contact.email">
                                    <v-icon >mdi-delete</v-icon>
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-card>
                    <v-card class="ma-5" width="100%" height="50px" v-if="contact.email">
                        <v-col>
                            <v-row class="ml-3 mr-3" ref="email">
                                <span>Email: </span>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    dense
                                    name="email"
                                    label="Email Address"
                                    id="id"
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-btn icon :href="'mailto:'+contact.email">
                                    <v-icon color="red">mdi-delete</v-icon>
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-card>
    
                    <v-card class="ma-5" width="100%" height="50px" v-if="contact.address" >
                        <v-col>
                            <v-row class="ml-3 mr-3" ref="address">
                                <span>Address: </span>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    dense
                                    name="address"
                                    label="Address"
                                    id="id"
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-btn icon :href="'mailto:'+contact.email">
                                    <v-icon color="red">mdi-delete</v-icon>
                                </v-btn>
                            </v-row>
                            
                        </v-col>
                    </v-card>
                    <br>
                    
                </v-col>
                
            <!-- </v-row> -->
          </v-row>
          <v-row>
            <v-spacer></v-spacer>        
            <v-btn color="warning mr-12">Cancel</v-btn>
            <v-btn color="success">Update</v-btn>
        </v-row>
        </v-flex>
      </v-container>
    </v-container>
</template>

<script>

import Api from '../Api/api'
import Navbar from '../components/Navbar'

export default {
    
    data() {
        return {
            id: '',
            contact : {
            }
        }
    },
    components: {
        Navbar
    },
    async created () {
        this.id = this.$route.params.id
        await this.loadContact()
        this.contact.address = this.contact.address+" "
        this.contact.address = this.contact.address.slice(0,-1)
    },
    filters : {
        truncate: function(value,event){
            let TRUNCATE_FIELD_SIZE = 50
            try {
                TRUNCATE_FIELD_SIZE = ~~(event.offsetWidth/10)-5
            } catch (error) {
                console.log(error);
            }
            let val = value.slice(0,TRUNCATE_FIELD_SIZE-3)
            return val+'...'
        }
    },
    methods: {
        aqua: (tag) => {   
            alert(tag)
        },
        loadContact : async function(){
            const resp = await Api.getContacts(this.id)
            this.contact = resp.data
            this.contact.image = "http://127.0.0.1:8090/"+ this.contact.image.split('/').slice(-2).join('/')
            this.contact.tags = []
            for(let i=0;i<resp.data.all_tags.length;i++)
            {
                this.contact.tags.push(resp.data.all_tags[i])                
            }
        },
        deleteContact : async function(){
            Api.deleteContact(this.id).then(function(){
                window.location.href = "/contacts"
            })
        },
        filterByTag : function(tag){
            window.location.href = "/contacts?filter="+tag.tag_name
        }
    },
    computed : {
        name: function() {
            return this.contact.firstname + " " + this.contact.lastname
        },
    },    
}
</script>

<style>

</style>