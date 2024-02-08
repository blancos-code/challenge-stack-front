<template>
    <AppHeader/>
    <v-app>
            <v-container class="mt-5">
                <h1>{{ producteur.utilisateur.prenom }} {{ producteur.utilisateur.nom }}</h1>
                 <v-breadcrumbs :items="items">
                  <template v-slot:item="props">
                    <a :href="'/'+props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text }}</a>
                  </template>
                </v-breadcrumbs>
                <p v-html="producteur.description"></p>
            </v-container>
      
    </v-app>
    <AppFooter />
  </template>
  <script setup>
    import AppHeader from '../layouts/AppHeader.vue';
    import AppFooter from '@/layouts/AppFooter.vue';
    import {getProducteur} from '@/conf/api/producteur';
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import {useRoute} from "vue-router";
    const primaryColor = '#18542c';
    const route = useRoute()
    const items = ref([
        {
          text: 'Accueil',
          disabled: false,
          href: ''
        },
        {
          text: 'Producteur',
          disabled: false,
          href: 'producteur/'+route.params.id
        }
    ])

   const producteur = ref("");
     
    async function getProducteurFromId(id) {
        producteur.value = await getProducteur(id);
    }
    onMounted(() => {
      getProducteurFromId(route.params.id)
    })

  </script>
  <style scoped>

  .v-application{
    background-color: #efebe9 !important;
  }
  ::v-deep .v-breadcrumbs{
    padding: 0 0 1rem 0;
  }
  h1, .no-data-found, a{
    color: v-bind(primaryColor);
  }

  a {
    text-decoration: none;
  }
  </style>