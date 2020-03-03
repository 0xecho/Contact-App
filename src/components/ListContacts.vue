<template>

    
    <v-layout row wrap>
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
                        <img :src="contact.img" alt="alt">
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
    </v-layout>

</template>

<script>
// TODO: Fetch all contacts from database and display them
export default {
  name: 'Home',
  props: ["filters"],
  data () {
    return {
        
        contacts : [
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},
            { name: "Elias Amha", img: "dummy.svg", route:"/contact/123"},            
        ]
        
    }
  }
  
}
</script>
