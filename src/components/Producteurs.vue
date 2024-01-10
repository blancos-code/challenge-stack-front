<template>
    <AppHeader/>
    <v-app>
            <v-container class="mt-5">
                <h1
                >Les Producteurs</h1>
               <v-breadcrumbs :items="items">
                  <template v-slot:item="props">
                    <a :href="'/'+props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text }}</a>
                  </template>
                </v-breadcrumbs>
                <p>Parcourez les différents producteurs et retrouvez-les aux marchés.</p>
    
            
        
            </v-container>
    </v-app>
  </template>
  <script setup props="searchedDate, searchLocation">
  import AppHeader from './../views/AppHeader.vue';

    import { ref } from 'vue';
    const items = ref([
        {
          text: 'Accueil',
          disabled: false,
          href: ''
        },
        {
          text: 'Producteurs',
          disabled: false,
          href: 'producteurs'
        }
    ])
    const primaryColor = '#18542c';
    
    
  </script>
  <style scoped>

  .v-application{
    background-color: #efebe9 !important;
  }
  ::v-deep .v-breadcrumbs{
    padding: 0 0 1rem 0;
  }

  h1{
    color: v-bind(primaryColor);
  }

  a {
    color:v-bind(primaryColor);
    text-decoration: none;
  }
  </style>