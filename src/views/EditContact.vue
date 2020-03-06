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
              <v-avatar size="300px" color="blue">
                <v-hover v-slot:default="{ hover }">
                  <v-img
                    :src="contact.image"
                    style="cursor:pointer;"
                    @click="imageFieldEnabled = !imageFieldEnabled"
                  >
                    <v-expand-transition>
                      <div
                        absolute
                        v-if="hover"
                        class="transition-fast-in-fast-out orange display-1"
                        style="width: 100%;bottom:0;align-items: center;justify-content: center;  opacity: .5;  position: absolute;"
                        opacity="0.1"
                        
                      >
                        <v-icon>mdi-camera</v-icon>
                        
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-hover>
              </v-avatar>
          </v-row>
          
          <v-row v-if="imageFieldEnabled" justify="center">
            <v-file-input @change="processFile($event)" style="max-width:500px" accept="image/*" prepend-icon="mdi-camera" label="Contact Image"></v-file-input>
          </v-row>
          
          <br>
          
          <v-row justify="center">
            <div>
                <v-text-field
                    v-model="fullname"
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
                        v-model="about"
                        label="About"
                        name="about"
                    >
                    </v-textarea>
                </v-col>
            <!-- <v-spacer></v-spacer> -->
                <v-col width="100%">
                    <v-card class="ma-5" width="100%" height="50px" >
                        <v-col>
                            <v-row class="ml-3 mr-3" ref="phone">
                                <span>Tel: </span>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    dense
                                    v-model="phone_number"
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
                    <v-card class="ma-5" width="100%" height="50px" >
                        <v-col>
                            <v-row class="ml-3 mr-3" ref="email">
                                <span>Email: </span>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    dense
                                    v-model="email"
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
    
                    <v-card class="ma-5" width="100%" height="50px" >
                        <v-col>
                            <v-row class="ml-3 mr-3" ref="address">
                                <span>Address: </span>
                                <v-spacer></v-spacer>
                                <v-text-field
                                    dense
                                    v-model="address"
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
            imageFieldEnabled: false,
            id: '',
            contact : {
            },
            fullname: "",
            email: "",
            phone_number: "",
            profile_picture: "",
            username: "",
            firstname: "",
            lastname: "",
            address: "",
            about: "",
            old_fullname: "",
            old_email: "",
            old_phone_number: "",
            old_profile_picture: "",
            old_username: "",
            old_firstname: "",
            old_lastname: "",
            old_address: "",
            old_about: "",
        }
    },
    components: {
        Navbar
    },
    async created () {
        this.id = this.$route.params.id
        await this.loadContact()
    },
    filters : {
        truncate: function(value,event){
            let TRUNCATE_FIELD_SIZE = 50
            try {
                TRUNCATE_FIELD_SIZE = ~~(event.offsetWidth/10)-5
            } catch (error) {
                // ERR
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
            this.fullname = this.contact.firstname + " " + this.contact.lastname
            this.about = this.contact.about
            this.phone_number = this.contact.phone_number
            this.email = this.contact.email
            this.address = this.contact.address
            this.contact.image = "http://127.0.0.1:8090/"+ this.contact.image.split('/').slice(-2).join('/')

            this.old_fullname = this.fullname
            this.old_fullname = this.email
            this.old_fullname = this.phone_number
            this.old_fullname = this.username
            this.old_fullname = this.firstname
            this.old_fullname = this.lastname
            this.old_fullname = this.address
            this.old_fullname = this.about
            
            this.contact.tags = []
            
            for(let i=0;i<resp.data.all_tags.length;i++)
            {
                this.contact.tags.push(resp.data.all_tags[i])                
            }
        },
        filterByTag : function(tag){
            window.location.href = "/contacts?filter="+tag.tag_name
        },
        addTag : function(){
            //do shit
        },
        deleteTag : function () {
            //delete tag
        },
        
        
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