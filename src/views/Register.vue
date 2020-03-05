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
                            name="name"
                            label="First Name"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            name="name"
                            label="Last Name"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            name="username"
                            label="Username"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            name="email"
                            label="Email"
                        ></v-text-field>
                    </v-col>
                </v-row>                
                <v-row>
                    <v-col>
                        <v-text-field
                            name="password"
                            label="Password"
                        ></v-text-field>
                    </v-col>                    
                    <v-col>
                        <v-text-field
                            name="verify"
                            label="Confirm Password"
                        ></v-text-field>
                    </v-col>
                </v-row>                
            </v-card-text>
            <v-card-actions>
                <v-btn class="info" link router to="/login">Login</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="primary">Register</v-btn>
            </v-card-actions>
        </v-card>
       </v-row>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>

</script>

<style>
</style>
// TODO ADD REGISTRATION LOGIC