<template>
  <div>
    <b-row class="mt-5">
      <b-col cols="3" class="left"> </b-col>
      <b-col cols="8">
        <b-card class="shadow-lg p-3">
          <b-row>
            <b-col cols="8">
              <h1><i class="fas fa-chevron-down" /> Factures</h1>
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
                    params: {  id: row.item.id },
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
  name: "Factures",
  data() {
    return {
      debug:false,
      perPage: 2,
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
      ],

    };
  },
  computed: {
    rows() {
      return this.bills.length;
    },

    ...mapState({
        bills: state => state.bill.bills
      })
    
  },
  methods: {
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
    },
  },
};
</script>

<style>
.grey-th th {
  color: lightgrey;
}

.links {
  color: rgb(29, 28, 68);
}

.links:hover {
  color: rgb(49, 148, 102);
  transition-duration: 500ms;
  text-decoration: none;
}
</style>
