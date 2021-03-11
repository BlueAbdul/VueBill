const namespaced = true
import {cloneDeep} from 'lodash'

const state = {
  bill: {},
  bills: [ 
    {
        id: 135,
        billNumber: 12,
        date: "",
        description: "",
        client: {
          idclient: 2,
          firstname: "Maria",
          lastname: "Doe",
        },
        prestations: [
          {
            description: "Test description",
            qty: 1,
            price: 450.0,
          },
          {
            description: "TOTO",
            qty: 1,
            price: 950.0,
          },
        ],
        discount: 0.0,
        paid: 450.0,
        tva: true,
        tvaRate: 20,
      },
      {
        id: 220,
        billNumber: 737,
        date: "",
        description: "",
        client: {
          idclient: 2,
          firstname: "Alphonse",
          lastname: "LaMenace",
        },
        prestations: [
          {
            description: "Cours de boxe",
            qty: 1,
            price: 50.0,
          },
          {
            description: "Visite chez le dentiste",
            qty: 1,
            price: 950.0,
          },
        ],
        discount: 0.0,
        paid: 0.0,
        tva: false,
        tvaRate: 20,
      },
      {
        id: 320,
        billNumber: 924,
        date: "",
        description: "",
        client: {
          idclient: 3,
          firstname: "Dimitri",
          lastname: "Nurmagomedov",
        },
        prestations: [
          {
            description: "Cours de danse",
            qty: 1,
            price: 50.0,
          },
          {
            description: "Cours de danse avancée",
            qty: 2,
            price: 950.0,
          },
        ],
        discount: 0.0,
        paid: 950.0,
        tva: true,
        tvaRate: 20,
      },
      {
        id: 750,
        billNumber: 3630,
        date: "",
        description: "",
        client: {
          idclient: 4,
          firstname: "Alain",
          lastname: "Lancien",
        },
        prestations: [
          {
            description: "Dentier",
            qty: 4,
            price: 250.0,
          },
          {
            description: "Pantoufles",
            qty: 2,
            price: 10.0,
          },
        ],
        discount: 260.0,
        paid: 0.0,
        tva: true,
        tvaRate: 20,
      },
]
}

const mutations = {
  // met à jour l'état de bill
  UPDATE_BILL(state, payload){
    state.bill = payload
  },
  UPDATE_BILLS(state, payload){
    state.bills = payload
  },
}
const actions = {
  
  //permet de récupérer les données d'une facture en fonction d'un id
  getBill({state, commit}, id) {

    //appel à la BDD (promise)

    // en attendant on fait semblant d'avoir une BDD...
    // on cherche la facture dans la BDD (ici pour l'instant le state local)
    //_.cloneDeep => permet de faire une copie profonde de l'objet trouvé dans le tableau
    //pour ne pas faire référence à l'objet original du tableau, mais bien un nouvel objet en mémoire
    const data = cloneDeep( state.bills.find(bill => bill.id == id) || {} )

    // console.log(state.bills.find(bill => bill.id == id ))
    // on déclenche la mutation des données une fois le résultat récupéré
    commit('UPDATE_BILL', data)
  },

  //permet de récupérer les données d'une facture en fonction d'un id
  saveBill({state, commit}, payload) {
    
    //l'id de la bill qu'on veut enregistrer
    const id = payload.id
    
    //faire un appel à la BDD pour mettre à jour côté server la bill correspondante
    //ici on fait semblant...
    // on doit enregistrer les données en BDD (ici pour l'instant le state local)
    state.bills.forEach((elt, i) => {
        if (elt.id == id) {
            state.bills[i] = cloneDeep(payload)
          }
    });

   
   
    // on déclenche la mutation des données une fois le résultat récupéré
    commit('UPDATE_BILLS', cloneDeep(state.bills) )
  },


  deleteBill({state, commit}, id){
    //appel à la BDD (promise)

    // en attendant on fait semblant d'avoir une BDD...
    // on cherche la facture dans la BDD (ici pour l'instant le state local)
    //_.cloneDeep => permet de faire une copie profonde de l'objet trouvé dans le tableau
    //pour ne pas faire référence à l'objet original du tableau, mais bien un nouvel objet en mémoire
    const data = cloneDeep( state.bills.filter(bill => bill.id != id) || {} )

    console.log(data)
    // on déclenche la mutation des données une fois le résultat récupéré
    commit('UPDATE_BILLS', data)
  }
}

// les getters sont comme des computed values pour le store.state
const getters = {
  getTwoLatestBills: (state) => {
    return state.bills.slice(0, 2)
  }
}


export {
  namespaced,
  state,
  mutations,
  actions,
  getters
}