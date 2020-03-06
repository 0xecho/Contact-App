<template>
  <v-container >
        <v-row>
                <v-btn icon link href="/contacts">
                    <v-icon big>arrow_back</v-icon>
                </v-btn>
            <v-layout row wrap justify-end>
                <v-flex shrink>
                    <v-btn icon right color="blue" class="mr-5" link :href="'/contact/edit/'+id">
                        <v-icon  big>edit</v-icon>
                    </v-btn>
                    <v-btn icon right color="red" @click="deleteContact">
                        <v-icon  big>delete</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
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
        <v-chip class="ma-2" v-for="(tag,i) in contact.tags" :key="i" :color="tag.color" @click="filterByTag(tag)">{{ tag.tag_name }}</v-chip>
      </v-row>
      <v-flex>
          
      <v-row justify="center" >  
        <!-- <v-row  justify="center" width="500px"> -->
            <v-col width="100%">
                <h3 class="subheading font-weight-medium">About</h3>
                <v-card flat height="150px">
                    <blockquote class="blockquote">
                        {{ contact.about }}
                    </blockquote>
                </v-card>
            </v-col>
        <!-- <v-spacer></v-spacer> -->
            <v-col width="100%">
                <v-card class="ma-5" width="100%" height="50px" v-if="contact.phone_number">
                    <v-col>
                        <v-row class="ml-3 mr-3" ref="phone">
                            <span>Tel: </span>
                            <v-spacer></v-spacer>
                            <span>{{contact.phone_number | $refs.phone}}</span>
                            <v-spacer></v-spacer>
                            <v-btn icon :href="'tel:'+contact.phone_number">
                                <v-icon color="green">mdi-phone</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-card>
                <v-card class="ma-5" width="100%" height="50px" v-if="contact.email">
                    <v-col>
                        <v-row class="ml-3 mr-3" ref="email">
                            <span>Email: </span>
                            <v-spacer></v-spacer>
                            <span>{{ contact.email | truncate($refs.email) }}</span>
                            <v-spacer></v-spacer>
                            <v-btn icon :href="'mailto:'+contact.email">
                                <v-icon color="red">mdi-email</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-card>

                <v-card class="ma-5" width="100%" height="50px" v-if="contact.address" >
                    <v-col>
                        <v-row class="ml-3 mr-3" ref="address">
                            <span>Address: </span>
                            <v-spacer></v-spacer>
                            <span>{{ contact.address | truncate($refs.address) }}</span>
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