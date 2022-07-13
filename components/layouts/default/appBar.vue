<template>
<v-app-bar
    app
    color="white"
    flat
>
    <v-container class="py-0 fill-height">
    <!--   -->
    <v-avatar
        class="mr-10"
        size="32"
        width="65"
    >
        <img src="e-commerce.jpg" alt="" srcset="">
    </v-avatar>
    

    <v-btn
        v-for="(link, key) in links"
        :key="key"
        text
        :to="link.url"
    >
        {{ link.nome }}
    </v-btn>

    <v-spacer></v-spacer>

    <v-responsive max-width="260">
        <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
        ></v-text-field>
    </v-responsive>
    <!-- <v-btn text @click="logout">Logout</v-btn> -->
    <div v-if="usuario != null">
        <layouts-default-menuUser :usuario="usuario"/>
    </div>
    
    </v-container>
</v-app-bar>
</template>

<script>
export default {
    name: "AppBar",
    async fetch() {
        this.user()
    },
    data() {
        return {
            usuario: null
        }
    },
    methods: {
        user() {
            this.$store.dispatch('login/userAuth')
                        .then((response) => {
                            this.usuario = null
                            // if (response.data != undefined && response.data.status == 401) {
                            //     this.usuario = null
                            //     localStorage.removeItem('token');
                            //     return this.$router.push('/login');
                            // } 
                            this.usuario = this.$store.state.login.user
                        })
        }
    },
    props:['links']
}
</script>

<style scoped>
.homeBack:hover {
    color: rgb(215, 67, 67) !important;
    cursor: pointer;
}
</style>