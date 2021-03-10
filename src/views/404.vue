<template>
  <div class="text-center">
      <title>404</title>
      <h1>ERROR 404 NOT FOUND</h1>
      <p>La route {{ $route.params.pathMatch }} n'éxiste pas</p>
      <b-button variant="primary" to="/" >Retour accueil</b-button>
  </div>
</template>

<script>
export default {
    name : '404'
}
</script>

<style>

</style>