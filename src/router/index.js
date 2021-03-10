import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)


const routes = [
    { name:'dashboard',path: '/', component : () => /*webpackChunkName : "Dashboard"*/ import ('@/views/Dashboard.vue')  },
    { name:'facture',path: '/bills', component : () =>/*webpackChunkName : "Bills"*/ import ('@/views/Bills.vue')   },
    { name:'edition-facture',path: '/editbill/:id',props: true, component : () =>/*webpackChunkName : "EditBills"*/ import ('@/views/EditBill.vue')}, 
    { name:'edition-client',path: '/editclient/:id',props: true, component : () =>/*webpackChunkName : "EditClient"*/ import ('@/views/EditClient.vue')} ,
    { name:'clients',path: '/clients', component : () =>/*webpackChunkName : "Clients"*/ import ('@/views/Clients.vue') },
    { name:'erreur-404',path: '*', component : () =>/*webpackChunkName : "Clients"*/ import ('@/views/404.vue') },
]

const router = new VueRouter({
  mode:'history',
    routes
})

export default router