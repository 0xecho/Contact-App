<template>
  <v-container >
        <v-row>
        <v-btn icon link href="/">
            <v-icon big>arrow_back</v-icon>
        </v-btn>
        </v-row>
       <v-row justify="center">
          <v-avatar
              size="300px"
              color="blue"
          >
              <img src="/dummy.svg" alt="alt">
          </v-avatar>
      </v-row>
      
      <br>
      
      <v-row justify="center">
        <div class="title">Elias Amha</div>
      </v-row>
      
      <!-- <v-row></v-row> TAGS -->
      <v-flex>
          
      <v-row justify="center" >  
        <!-- <v-row  justify="center" width="500px"> -->
            <v-col xs12 lg6>
                <h3 class="subheading font-weight-medium">About</h3>
                <v-card flat height="150px">
                    <blockquote class="blockquote">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iure asperiores cumque corporis alias aperiam, provident beatae ullam quidem neque inventore rerum voluptatibus voluptatum amet dolores, error nesciunt quasi modi!
                    </blockquote>
                </v-card>
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-col xs12 lg6>
                <v-card class="ma-5" width="100%" height="50px">
                    <v-col>
                        <v-row class="ml-3 mr-1">
                            <span>Tel: </span>
                            <v-spacer></v-spacer>
                            <span>0943149882</span>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon color="green">mdi-phone</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-card>
                <v-card class="ma-5" width="100%" height="50px">
                    <v-col>
                        <v-row class="ml-3 mr-1">
                            <span>Email: </span>
                            <v-spacer></v-spacer>
                            <span>mr.m.r.s.h.i.e.l.d@gmail.com</span>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon color="red">mdi-email</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-card>
                <v-card class="ma-5" width="100%" height="50px">
                    <v-col>
                        <v-row class="ml-3 mr-1">
                            <span>Address: </span>
                            <v-spacer></v-spacer>
                            <span>Gullele, Addis Ababa</span>
                            <v-spacer></v-spacer>
                            <v-btn icon>
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

// TODO: Use id param given to get a single user from db and display info here
export default {
    
    data() {
        return {
            tags : ["Friend", "Classmate"],
        }
    }
    
}
</script>

<style>

</style>