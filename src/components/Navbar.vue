<template>
    <nav>
        <v-app-bar flat app class="light-grey lighten-4">
            <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <span class="font-weight-light">Contacts</span>
                <span class="font-weight-bold">App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text link router to="/logout">
                <span>Sign-out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app color="grey lighten-5">
            <v-list>
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar
                            size="100"
                            color="light-blue"
                        >
                            <img :src="profile_picture" alt="alt">
                        </v-avatar>                        
                    </v-flex>
                    
                    <p class="mt-3">{{ name }}</p>
                </v-layout>
               <v-list-item link router to="/profile">
                        <v-list-item-action>
                            <v-icon left small>person</v-icon>
                        </v-list-item-action>
                        <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                
                <v-list-group
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-item-action>
                            <v-icon left small>contacts</v-icon>
                        </v-list-item-action>
                        Contacts
                    </template>
                        
                    <v-list-item 
                        link router to="/add"
                    >
                        <v-list-item-title>Add Contact</v-list-item-title>
                        
                    </v-list-item>
                    <v-list-item 
                        link href="/contacts"
                    >
                        <v-list-item-title>View All Contacts</v-list-item-title>
                        
                    </v-list-item>

                </v-list-group>
                
                <v-list-group
                    no-action
                >
                    <template v-slot:activator>
                        <!-- <v-list-tile-content> -->
                            <v-list-item-action>
                                <v-icon left small>category</v-icon>
                            </v-list-item-action>
                            Categories

                        <!-- </v-list-tile-content> -->
                    </template>
                        
                    <v-list-item 
                        v-for="(category) in categories"
                        :key="category.text"
                        link :href="'/contacts'+category.route"
                    >
                        <v-list-item-title v-text="category.name"></v-list-item-title>
                        
                    </v-list-item>

                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>

import Api from '../Api/api'

export default {

    data() {
        return {
            name: "",
            profile_picture: "",
            drawer: false,
            categories: [
                { 
                    name: "Family",
                    route: "?filter=family",
                },{ 
                    name: "Friends",
                    route: "?filter=friends",
                },{ 
                    name: "Class",
                    route: "?filter=class",
                },{ 
                    name: "Office",
                    route: "?filter=office",
                }
            ],
        }
    },
    async created(){
        this.getUserInfo()
    },
    methods: {
        toggleDrawer : function() {
            this.drawer = ! this.drawer;
        }, 
        loggedIn: function() {
            return localStorage.getItem('user') != null
        },
        getUserInfo: async function() {
            let info = (await Api.getUserInfo()).data
            console.log(info);
            
            this.name = info.firstname + " " + info.lastname
            this.profile_picture = "http://127.0.0.1:8090/" + info.profile_picture.split('/').slice(-2).join('/')
        }
    }   

}
</script>

<style>

</style>