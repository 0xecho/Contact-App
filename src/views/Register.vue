<template>
  <v-app >
    <v-content >
    <v-container
        class="fill-height grey lighten-3"
        fluid
      >
       <v-row
          align="center"
          justify="center"
       >
        <v-card width="30%" style="mx-auto" >
            <v-card-title class="primary white--text" primary-title>
                Register
            </v-card-title>
            <v-card-text>        
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="firstname"
                            name="firstname"
                            label="First Name"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="lastname"
                            name="name"
                            label="Last Name"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="username"
                            name="username"
                            label="Username"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="email"
                            name="email"
                            label="Email"
                        ></v-text-field>
                    </v-col>
                </v-row>                
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="password"
                            name="password"
                            label="Password"
                        ></v-text-field>
                    </v-col>                    
                    <v-col>
                        <v-text-field
                            v-model="password_verify"
                            name="verify"
                            label="Confirm Password"
                        ></v-text-field>
                    </v-col>
                </v-row>                
            </v-card-text>
            <v-card-actions>
                <v-btn class="info" link router to="/login">Login</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="primary" @click="register">Register</v-btn>
            </v-card-actions>
        </v-card>
       </v-row>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import Api from "../Api/api";

    export default {
      data() {
        return {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            password_verify: ""
        };
      },
    
      methods: {
        register: function() {
            
            if(this.password!=this.password_verify || !this.password.length){
                // SHOW ERROR
                return
            }
            let registrationData = {
                firstname: this.firstname,
                lastname: this.lastname,
                username: this.username,
                email: this.email,
                password: this.password,
            }
            Api.register(registrationData).then(function(){
                this.$router.replace('/login')
            }).catch((err)=>{  
                // SHOW ERROR
                console.log(err);
                
            })
          
        }
      }
    };
</script>

<style>
</style>
