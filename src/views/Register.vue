<template>
  <v-app >
    <v-content >
    <v-container
        class="fill-height light-grey lighten-3"
        fluid
      >
      <v-row align="center" justify="center">
        <v-col max-width="100">
            <v-alert v-for="(errorVal,i) in errored" type="error" :key="i" :value="errorVal" dismissable>{{errorVal}}</v-alert>
        </v-col>
      </v-row>
       <v-row
          align="center"
          justify="center"
       >
        <v-card width="30%" style="mx-auto">
            <v-card-title class="primary white--text" primary-title>
                Register
            </v-card-title>
            <v-form ref="form">
                <v-card-text>        
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="firstname"
                                name="firstname"
                                label="First Name"
                                :rules="[v => !!v || 'First name is required',]"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="lastname"
                                name="name"
                                label="Last Name"
                                :rules="[v => !!v || 'Last name is required',]"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="username"
                                name="username"
                                label="Username"
                                :rules="[v => !!v || 'Username is required',]"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="email"
                                name="email"
                                label="Email"
                                :rules="[v => !!v || 'Email is required',]"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>                
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="password"
                                name="password"
                                label="Password"
                                type="password"
                                :rules="passwordRules"
                                required
                            ></v-text-field>
                        </v-col>                    
                        <v-col>
                            <v-text-field
                                v-model="password_verify"
                                name="verify"
                                label="Confirm Password"
                                type="password"
                                :rules="passwordRules"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>                
                </v-card-text>
            </v-form>
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
            password_verify: "",
            errored: [],
            passwordRules: [ 
                v => (v.length >= 5) || 'Password must have 5+ characters',
            ],
        };
      },
    
      methods: {
        register: function() {
            this.errored = [] 
            if(this.password!=this.password_verify || !this.password.length){
                this.errored.push("Password Confirmation Failed.")
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
            }).catch(err=>{
                
                
                for(let error of Object.keys(err.response.data.errors.error.errors)){
                    error = err.response.data.errors.error.errors[error]
                    this.errored.push(error.path + " " + error.message)
                }
                
            })
        }
      }
    };
</script>

<style>
</style>
