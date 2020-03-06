<template>

<v-container>
    <Navbar />
  <v-content grid-list-xs>
    <!--TODO GET ERRORS OPN SUBMUIT AND SHOW THEM HERER -->
    <v-row>
        <!-- <v-col cols="2"></v-col> -->
        <v-col cols="3">
            <v-card flat>
                <v-card-title primary-title>
                <v-btn icon link href="/contacts">
                    <v-icon big>arrow_back</v-icon>
                </v-btn>
                    Add New Contact
                </v-card-title>
            </v-card>
        </v-col>
    
        <v-col>
            <v-card flat>
                <v-text-field
                    v-model="firstname"
                    name="firstname"
                    label="First Name"
                ></v-text-field>
            </v-card>
        </v-col>
        
        <v-col>
            <v-card flat>
                <v-text-field
                    v-model="lastname"
                    name="lastname"
                    label="Last Name"
                ></v-text-field>
            </v-card>
        </v-col>
    
    </v-row> 
    
    <v-row>
        <v-col cols="3">

        </v-col>
    
        <v-col>
            <v-card flat>
                <v-text-field
                    v-model="phone"
                    name="phone"
                    label="Phone Number"
                ></v-text-field>
            </v-card>
        </v-col>

    
    </v-row> 
    
    <v-row>
        <v-col cols="3">

        </v-col>
    
        <v-col>
            <v-card flat>
                <v-text-field
                    v-model="email"
                    name="email"
                    label="Email Address"
                ></v-text-field>
            </v-card>
        </v-col>
    
    </v-row> 
    
    <v-row>
        <v-col cols="3">
        </v-col>
    
        <v-col>
            <v-card flat>
                <v-textarea
                    v-model="about"
                    label="About Contact"
                    hint="Optional field"
                    outlined
                >
                </v-textarea>
            </v-card>
        </v-col>
    
    </v-row> 
    
    <v-row> 
    <!-- TODO Add previosly registered tags to options list components/chips#in-selects -->
        <v-col cols="3"></v-col>
        <v-col>
            <v-flex xs12>
              <v-combobox multiple
                        v-model="selected_tags" 
                        label="Tags" 
                        append-icon
                        chips
                        deletable-chips
                        class="tag-input"
                        :search-input.sync="search" 
                        @keyup.tab="addNewTag"
                        @paste="addNewTag">
              </v-combobox>
            </v-flex>
            
            <v-chip close v-for="(tag,i) in selected_tags"
                    color="success" 
                    text-color="white"
                    :key="i"
                    >
             &nbsp; <v-icon left>label</v-icon>{{tag}}
            </v-chip>  
        </v-col>
    </v-row>
    
    <v-row>
        <v-col cols="3">
            <v-card flat>    
            </v-card>
        </v-col>
        
        <v-col>
            <v-card flat>
                <v-text-field
                    v-model="address"
                    name="address"
                    label="Address"
                ></v-text-field>
            </v-card>
        </v-col>
        
    </v-row>
    <v-row>
        <v-col cols="3">
            <v-card flat>    
            </v-card>
        </v-col>
        <v-file-input @change="processFile($event)" prepend-icon="mdi-none" append-icon="mdi-camera" accept="image/*" label="Image"></v-file-input>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="addContact">
            <span>Add Contact</span>
        </v-btn>
    </v-row>
  </v-content>
  </v-container>
</template>

<script>

import Navbar from '../components/Navbar';
import Api from '../Api/api'

export default {    
    
    components: {
        Navbar
    },
    data() {
        return {
            selected_tags: [],
            search: '',
            file:'',
            firstname:'',
            lastname:'',
            phone:'',
            email:'',
            about:'',
            address:'',
        }
    },
    methods: {
        addNewTag(){
            this.$nextTick(() => {
            this.selected_tags.push(...this.search.toLowerCase().split(","))
            this.$nextTick(() => {
              this.search = ""
            });
          });   
        }, 
        processFile(file){
            this.file = file
        },
        addContact() {
            let formdata = new FormData();
            formdata.append('image',this.file)
            formdata.append('tags',this.selected_tags)
            formdata.append('firstname',this.firstname)
            formdata.append('lastname',this.lastname)
            formdata.append('phone_number',this.phone)
            formdata.append('email',this.email)
            formdata.append('about',this.about)
            formdata.append('address',this.address)
            
            Api.addContact(formdata).then(()=>{
                this.$router.replace('/')
            }
            ).catch(err=>console.log(err))
        }
    },   
}
</script>

<style>

</style>