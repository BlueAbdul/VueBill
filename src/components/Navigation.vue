<template>
  <div>
    <b-navbar variant="primary">
      <b-button v-b-toggle.main-sidebar variant="light" class="mr-3">
        <i class="fas fa-lg fa-bars" />
      </b-button>
      <b-nav-text>
        <h1 class="text-light">Ma super application</h1>
      </b-nav-text>
    </b-navbar>

    <b-sidebar bg-variant="light" id="main-sidebar" shadow>
      <b-row class="px-3 py-2 flex-column mx-auto">

        <b-img src="@/assets/logo.svg" class="ml-2" />
        <h2 class="my-3 text-dark">Ma super app</h2>

        <nav-menu>
          <nav-menu-item v-for="(item, index) in navItems" :key="index" :link="item"  />
        </nav-menu>

        <div class="mt-4">
***
          <custom-btn icon="fa-envelope">
            Contact us
          </custom-btn>
      </div>
      </b-row>
      
        
    
        
    </b-sidebar>
  </div>
</template>

<script>
  //pas d'import de nav-menu et nav-menu-item ici, car on les importe globalement
  import NavMenu from '@/components/nav-menu/NavMenu.vue'
  import NavMenuItem from '@/components/nav-menu/NavMenuItem.vue'

  export default {
    name: 'Navigation',
    components: {
      NavMenu,
      NavMenuItem
    },
    data(){
      return {
        navItems: [
          { name: 'Dashboard', path: '/' },
          { name: 'Factures',  path: '/bills' },
          { name: 'Clients',  path: '/clients' },
          { name: 'EditBill',  path: '/editbill/245' },
          { name: 'EditClient',  path: '/editclient' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>