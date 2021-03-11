import Vue from 'vue'
import Vuex from 'vuex'

import * as bill from './modules/bill'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        bill
    },
    state:{
        counter: 1,
        dataStore : 'Je viens du store'
       
    },
    mutations:{
        ON_UPDATE_COUNTER(state, payload){
            state.counter = payload
        }
    },
    // les actions sont asycnhrones et peuvent faire des requêtes HTTP
    actions:{
        updateCounter({state, commit}){
            //L'action fait un appel pour mettre à jour la donnée
            //Lorsque la donnée est fetch
            //La mutation se déclenche
            let newCounter = state.counter + 1
            commit('ON_UPDATE_COUNTER', newCounter)
        },
        changeCounter({state, commit}, payload){
            //L'action fait un appel pour mettre à jour la donnée
            //Lorsque la donnée est fetch
            //La mutation se déclenche
            let newCounter = parseInt(state.counter) + parseInt(payload)
            commit('ON_UPDATE_COUNTER', newCounter)
        }

    },
    getters:{}
})

export default store