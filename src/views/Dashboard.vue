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
         <b-row class="mt-5">
      <b-col cols="3" class="left"> </b-col>
      <b-col cols="8">
        <b-card class="shadow-lg p-3">
          <b-row>
            <b-col cols="8">
              <h1><i class="fas fa-chevron-down" /> Deux dernières factures</h1>
            </b-col>
            <b-col cols="2" class="mt-3">
              <i class="fas fa-plus" /> <a>Nouveau client </a>
            </b-col>
            <b-col cols="2" class="mt-3">
              <i class="fas fa-plus" /> <a>Nouvelle facture </a>
            </b-col>
          </b-row>
          <hr />
          <br />
          <b-row>
            <b-table
              hover
              :items="bills"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              class="grey-th"
            >
              <template #cell(id)="row">
                <p>Facture n° {{ row.item.id }}</p>
              </template>
              <template #cell(client)="row">
                <p>
                  {{ row.item.client.firstname }} {{ row.item.client.lastname }}
                </p>
              </template>
              <template #cell(montant)="row">
                <p>{{ montantHT(row.item.prestations) }} € HT</p>
              </template>
              <template #cell(montant-ttc)="row">
                <p>{{ montantTTC(row.item) }} € TTC</p>
              </template>
              <template #cell(action)="row">
                <router-link
                  :to="{
                    name: 'edition-facture',
                    params: { bill: row, id: row.item.id },
                  }"
                  class="links"
                >
                  <b>Modifier</b></router-link
                >
              </template>
            </b-table>
          </b-row>

          <b-row>
            <b-col cols="12">
              <b-pagination
                align="center"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>
            </b-col>
          </b-row>
        </b-card>
        <b-form-checkbox class="my-4" v-model="debug" name="debug" switch
          >Debug</b-form-checkbox
        >

        <pre
          v-if="debug"
          class="debug card border-primary bg-dark text-light p-4"
          >{{ bills }}</pre
        >
      </b-col>
      <b-col> </b-col>
    </b-row>
    

  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name : 'Dashboard',
    data(){
      return {
        debug:false,
        counter : 0,
        perPage: 1,
      currentPage: 1,
         fields: [
        {
          key: "id",
          label: "N° facture",
          class: "cell-th",
          sortable: true,
        },
        {
          key: "client",
          label: "Client",
          class: "cell-th",
          sortable: false,
        },
        {
          key: "montant",
          label: "Montant HT",
          class: "cell-th",
          sortable: false,
        },
        {
          key: "montant-ttc",
          label: "Montant TTC",
          class: "cell-th",
          sortable: false,
        },
        {
          key: "action",
          label: "Action",
          class: "cell-th",
          sortable: false,
        },
      ]
      }
    },

    computed:{
      rows() {
      return 2;
    },
      counterStore(){
        return this.$store.state.counter
      },
      dataStore(){
        return this.$store.state.dataStore
      },
      ...mapState({
        bills: state => state.bill.bills
      })
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
      },
       montantHT(elt) {
      let result = 0;
      elt.forEach((el) => {
        result += el.price * el.qty;
      });
      return result;
    },

    montantTTC(elt) {
      let ht = this.montantHT(elt.prestations);
      let reductions = elt.discount + elt.paid;
      let tva = elt.tvaRate;
      let resultTVA = 0;
      let result = 0;
      if( elt.tva){
          tva = tva / 100;
           resultTVA = ht * tva;
           result = ht + resultTVA - reductions;
      }
      return result;
    }
    }
}
</script>

<style>

</style>