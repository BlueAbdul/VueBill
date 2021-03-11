<template>
  <div>
    <b-container class="p-5">

      <h1>Dashboard</h1>
      <p>
      Counter du composant {{counter}}
      </p>
    
      <p>
      Counter du store {{counterStore}}
      </p>
      <b-btn @click="onAddCounter()">ADD on store</b-btn>
      <br>
      <p>{{dataStore}}</p>
      <label>Ajoutez un nombre spécial au compteur store </label>
      <br>
      <input type="number" @change="changeCounter">
    </b-container>

  </div>
</template>

<script>
export default {
    name : 'Dashboard',
    data(){
      return {
        counter : 0
      }
    },

    computed:{
      counterStore(){
        return this.$store.state.counter
      },
      dataStore(){
        return this.$store.state.dataStore
      }
    },
    methods: {
      onAddCounter(){

        //Déclencher l'action, puis la mettre à jour
        this.$store.dispatch('updateCounter')
      },
      changeCounter(event){
       let data = event.target.value;
       //Déclencher l'action, puis la mettre à jour
        this.$store.dispatch('changeCounter', data)
      }
    }
}
</script>

<style>

</style>