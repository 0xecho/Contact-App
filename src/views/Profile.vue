<template>
  <v-container>
    <Navbar />
    <v-container fluid class="mt-12">
      <v-row>
        <v-spacer></v-spacer>
        <div class="display-1 font-weight-light">Edit profile</div>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-btn icon link href="/contacts">
          <v-icon big>arrow_back</v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center">
          <v-avatar size="300px" color="blue">
            <v-hover v-slot:default="{ hover }">
              <v-img
                :src="image!==''?image:'/dummy.svg'"
                style="cursor:pointer;"
                @click="imageFieldEnabled = !imageFieldEnabled"
              >
                <v-expand-transition>
                  <div
                    absolute
                    v-if="hover"
                    class="transition-fast-in-fast-out orange display-1"
                    style="width: 100%;bottom:0;align-items: center;justify-content: center;  opacity: .5;  position: absolute;"
                    opacity="0.1"
                    
                  >
                    <v-icon>mdi-camera</v-icon>
                    
                  </div>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </v-avatar>
      </v-row>
      <br />
  
      <v-row v-if="imageFieldEnabled" justify="center">
        <v-file-input @change="processFile($event)" style="max-width:500px" accept="image/*" prepend-icon="mdi-camera" label="Profile picture"></v-file-input>
      </v-row>
      <v-row justify="center">
        <div class="title">NAME</div>
      </v-row>
      
          
      <v-container style="max-width:500px">
        <v-row justify="center" class="ma-1">
          <p class="subheading grey--text" >Basic Information</p>
        </v-row>
        <v-col xs12 sm6 md4>
          <v-row justify="center">
            <v-text-field
              name="fisrtname"
              v-model="firstname"
              label="First Name"
              class="ma-2"
            ></v-text-field>
            <v-text-field
              name="lastname"
              v-model="lastname"
              label="Last Name"
              class="ma-2"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              name="email"
              v-model="email"
              label="Email Address"
              class="ma-2"
            ></v-text-field>
          </v-row>
        </v-col>
        
        <v-row justify="center" class="ma-1">
          <p class="subheading grey--text" >Login Information</p>
        </v-row>
        <v-col>
          <v-row>
            <v-text-field
                  name="username"
                  v-model="username"
                  label="Username"
                  class="ma-2"
                ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
                  @change="passwordEdited=true"
                  name="password"
                  v-model="password"
                  label="Password"
                  class="ma-2"
                  type="password"
                ></v-text-field>
          </v-row>
          <v-row v-if="passwordEdited">
            <v-text-field
              name="passwordVerify"
              v-model="passwordVerify"
              label="Confirm Password"
              class="ma-2"
              type="password"
            >
            </v-text-field>
          </v-row>
        </v-col>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn color="warning" class="mr-5" >Cancel</v-btn>
          <v-btn color="success" @click="update">Update</v-btn>
        </v-row>
        
        
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import Api from "../Api/api";
import Navbar from "../components/Navbar"
// if value not empty and changed
export default {
  components: {
    Navbar,
  },
  data() {
    // STORE CURRENT PROFILE INFO
    return {
      imageFieldEnabled: false,
      passwordEdited: false,
      new_image:"",
      firstname:"",
      lastname:"",
      email:"",
      username:"",
      password:"",
      passwordVerify:"",
      old_firstname:"",
      old_lastname:"",
      old_email:"",
      old_username:"",
      old_password:"",
      image: "",
    }
  },
  async created() {
      let userInfo = (await Api.getUserInfo()).data
      this.username = userInfo.username
      this.firstname = userInfo.firstname
      this.lastname = userInfo.lastname 
      this.email = userInfo.email
      this.password = "P4$$W0R6"
      this.old_password = this.password
      this.old_firstname = this.firstname
      this.old_lastname = this.lastname
      this.old_username = this.username
      this.old_email= this.email
      this.image = "http://127.0.0.1:8090/" + userInfo.profile_picture.split('/').slice(-2).join('/')
      
  },
  methods: {
    update : function(){
      let newProfileData = new FormData()
      
      
      if(this.new_image.name)newProfileData.append("profile_picture", this.new_image)
      if(this.password!== this.old_password)
        if(this.password !== this.passwordVerify){
          console.error("Passwords donot match");
          return
        }else{
          newProfileData.append("password", this.password)
        }
      if(this.firstname !== this.old_firstname)newProfileData.append("firstname", this.firstname)
      if(this.lastname !== this.old_lastname)newProfileData.append("lastname", this.lastname)
      if(this.username !== this.old_username)newProfileData.append("username", this.username)
      if(this.email !== this.old_email)newProfileData.append("email", this.email)
      
      Api.updateProfile(newProfileData).then(()=>{
        window.location.href = "/contacts"
      })
    },
    processFile: function(file){
      this.new_image = file
    }
  }
};
</script>

<style>
</style>