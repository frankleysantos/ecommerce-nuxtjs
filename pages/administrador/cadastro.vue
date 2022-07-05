<template>
<div>
  <progresso :progresso="66.66" :qnt="2"/>
  <v-container grid-list-xs class="centralizado">
    <tela-segunda/>
  </v-container>
</div>
</template>

<script>
export default {
  created() {
    if (!this.$store.state.administrador.aceite) {
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>