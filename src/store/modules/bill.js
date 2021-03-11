
const namespace = true

const state = {
    bills: [
        {
            id: 135,
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

}

const actions = {

}

const getters = {

}

export  {namespace,state,mutations,actions,getters}