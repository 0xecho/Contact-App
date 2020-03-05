<template>
    <nav>
        <v-app-bar flat app class="grey lighten-4">
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
                <!-- <v-list-tile >
                    <v-list-tile-action>
                        <v-icon left>category</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Categories</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile> -->
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar
                            size="100"
                            color="blue"
                        >
                            <img src="/dummy.svg" alt="alt">
                        </v-avatar>                        
                    </v-flex>
                    
                    <p class="mt-3">Elias Amha</p>
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
                        <!-- <v-list-tile-content> -->
                            <v-list-item-action>
                                <v-icon left small>contacts</v-icon>
                            </v-list-item-action>
                            Contacts

                        <!-- </v-list-tile-content> -->
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
                        link router :to="category.route"
                    >
                        <v-list-item-title v-text="category.name"></v-list-item-title>
                        
                    </v-list-item>

                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {

    data() {
        return {
            drawer: false,
            categories: [
                { 
                    name: "Family",
                    route: "/filter?family",
                },{ 
                    name: "Friends",
                    route: "/filter?friends",
                },{ 
                    name: "Class",
                    route: "/filter?class",
                },{ 
                    name: "Office",
                    route: "/filter?office",
                }
            ],
        }
    },
    methods: {
        toggleDrawer : function() {
            this.drawer = ! this.drawer;
        }, 
        loggedIn: function() {
            return localStorage.getItem('user') != null
        }
    }

}
</script>

<style>

</style>