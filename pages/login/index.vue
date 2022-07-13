<template>
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                <v-icon icon="home" />
                <v-form @submit.prevent="formLogin" ref="form" lazy-validation>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="person"
                              name="login"
                              label="Login"
                              type="text"
                              v-model="login.username"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="login.password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type="submit">Login</v-btn>
                     </v-card-actions>
                  </v-card>
                </v-form>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
</template>

<script>
export default {
    layout: 'login/login',
    data() {
        return {
            login: []
        }
    },
    methods: {
        formLogin: function() {
           this.$store.dispatch('login/loginApi', this.login)
                           .then((response) => {
                              return this.$router.push('/')
                           })
        },
    }
}
</script>

<style>

</style>