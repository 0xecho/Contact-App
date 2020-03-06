<template>
  <div>
    <v-img height="600px"  style="background-image: url('/background.jpg');background-size: cover; ">
      <v-layout fill-height justify-center style="background: rgba(20, 20, 20, 0.4);">  
        <v-container >
          <v-row>
            <div class="display-1 white--text">Contact<b>APP</b></div>
            <v-spacer></v-spacer>
            <v-btn text class="white--text" link href="/login">Login</v-btn>
            <v-btn text class="white--text" link href="/register">Register</v-btn>
            <v-btn text class="white--text" link href="http://0xecho.proto-code.com" target="_blank">About</v-btn>
          </v-row>
          
          <v-flex fill-height style="display:flex;">
            <div>
              <h1 style="align-content:center" class="mt-12 display-1 font-weight-light white--text">Contact management <br/> software, refreshingly <br> simple</h1>
            </div>
          </v-flex>

        </v-container>
      </v-layout>
    </v-img>
    <v-content>      
     <br>   
     <br>   
     <p class="display-2 font-weight-thin grey--text text-center"> What we offer</p>
     <v-container class="pa-4 text-center">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items">
            <v-col
              :key="i"
              cols="12"
              md="4"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card 
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="vvcard"
                >
                    <v-card-title class="title black--text">
                        <div>
                          <p class="title font-weight-bold text-center text-wrap" wrap>
                            {{ item.text }}
                          </p>
                          <p class="ma-4 font-weight-light text-center text-wrap" wrap>
                            {{ item.subtext }}
                          </p>
                        </div>
    
                      
                    </v-card-title>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
      <br>
      <h2 class="display-3 text-center">
        Take your business with you, <b>wherever</b> you go.
      </h2>
      
       <v-container >
        <v-col >
          <p class="pa-4 body-1">
            By using this system, you will get a <b>simple</b> and <b>easy</b> to use contact management interface. Available <b>wherever you are</b> through any of your electronic devices.
          </p>
        </v-col>
      </v-container>
       <v-row align="center" justify="center">
        <v-col
  
          md="4"
        >
          <v-card>
              <v-card-title class="title black--text">
                    <v-spacer></v-spacer>
                      <div align="center">
                        <p class="text-center">Are you Ready To begin?</p>
                      </div>        
                    <v-spacer></v-spacer>
                  
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" block tile outlined link href="/register">Yes</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
          </v-card>
        </v-col>
       </v-row>
      </v-content>
      
      <v-footer padless>

        <v-col
          class="text-center"
        >
          {{ new Date().getFullYear() }} — <strong>ContactAPP</strong> — Made with <v-icon color="pink">mdi-heart</v-icon> by 0xecho
        
          

        </v-col>
      </v-footer>
      
  </div>
</template>

<script>


// import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  data(){
    return {
      items: [
        {
          text: "One place for all your contacts.",
          subtext: 'Maintain your contacts in your own central address book',
          img: '/dummy.svg',
        },
        {
          text: 'Search intelligently.',
          subtext: 'Find who you are looking for in a matter of seconds',
          img: '/dummy.svg',
        },
        {
          text: 'Categorise using Tags',
          subtext: 'Want to call all your classmates , you do not have to scroll through your whole address book anymore',
          img: '/dummy.svg',
        },
      ],
      transparent: 'rgba(255, 255, 255, 0.2)',

    }
  },
  components: {
    // Navbar,
    // Login
  },
}
</script>

<style scoped>
.vvcard {
  transition: opacity .4s ease-in-out;
}

.vvcard:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>