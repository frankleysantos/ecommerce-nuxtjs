<template>
    <v-carousel v-model="carrousel" height="500">
        <v-carousel-item
            v-for="(prod, key) in item"
            :key="key"
            :src="$config.apiBaseURL+'media/'+prod.fotoproduto__foto"
        >
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            carrousel: 0
        }
    },
    props: ['item']
}
</script>

<style>

</style>