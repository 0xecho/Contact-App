<template>
  <v-app>
    <v-content>
      <v-container class="fill-height grey lighten-3" fluid>
        <v-alert v-for="(errorVal,i) in errored" type="error" :key="i" :value="errorVal" dismissable>{{errorVal}}</v-alert>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card flat outlined>
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    :rules="[v => !!v || 'Username is required',]"
                    v-model="username"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    :rules="[v => !!v || 'Password is required',]"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="info" link router to="/register">Register</v-btn>
                <v-spacer />
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
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
      username: "",
      password: "",
      errored: []
    };
  },

  methods: {
    login: function() {
      this.errored = []
      Api.login(this.username, this.password).then(resp => {
        if (resp.data.success) {
          localStorage.user = resp.data.username;
          localStorage.token = resp.data.token;
          Api.persist_user(resp.data.token, resp.data.username);
          this.$router.replace({ name: "Contacts" });
        }
        else{
          this.errored.push("Incorrect Username or Password")
        }
      });
    }
  }
};
</script>