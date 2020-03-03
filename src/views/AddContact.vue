<template>

<v-container>
    <Navbar />
  <v-content grid-list-xs>
            
    <v-row>
        <!-- <v-col cols="2"></v-col> -->
        <v-col cols="3">
            <v-card flat>
                <v-card-title primary-title>
                <v-btn icon link href="/">
                    <v-icon big>arrow_back</v-icon>
                </v-btn>
                    Add New Contact
                </v-card-title>
            </v-card>
        </v-col>
    
        <v-col>
            <v-card flat>
                <v-text-field
                    name="firstname"
                    label="First Name"
                ></v-text-field>
            </v-card>
        </v-col>
        
        <v-col>
            <v-card flat>
                <v-text-field
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
                    label="About"
                    hint="Optional field"
                    outlined
                >
                </v-textarea>
            </v-card>
        </v-col>
    
    </v-row> 
    
    <v-row>  <!-- TODO Add previosly registered tags to options list -->
        <v-col cols="3"></v-col>
        <v-col>
            <v-flex xs12>
              <v-combobox multiple
                        v-model="select" 
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
            
            <v-chip close v-for="(tag,i) in select"
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
                    name="address"
                    label="Address"
                ></v-text-field>
            </v-card>
        </v-col>
        
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-btn color="success">
            <span>Add Contact</span>
        </v-btn>
    </v-row>
  </v-content>
  </v-container>
</template>

<script>
import Navbar from '../components/Navbar';

export default {    
    
    components: {
        Navbar
    },
    data() {
        return {
            selected_tags: [],
            search: ''
        }
    },
    methods: {
        addNewTag(){
            this.$nextTick(() => {
            this.select.push(...this.search.split(","));
            this.$nextTick(() => {
              this.search = "";
            });
          });   
        }
    },


}
</script>

<style>

</style>