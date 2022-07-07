<template>
<v-app-bar
    app
    color="white"
    flat
>
    <v-container class="py-0 fill-height">
    <v-avatar
        class="mr-10"
        size="32"
        width="120"
    >
        <img src="logo_dark.svg" alt="" srcset="">
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
    <v-btn text @click="logout">Logout</v-btn>
    </v-container>
</v-app-bar>
</template>

<script>
export default {
    name: "AppBar",
    methods: {
        logout() {
            localStorage.removeItem('token');
            return this.$router.push('/login')
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