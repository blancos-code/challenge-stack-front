<template>
    <AppHeader/>
    <v-app>
            <v-container class="mt-5">
                <h1
                >Marche de {{ marche.nom }}</h1>
               <v-breadcrumbs :items="items">
                  <template v-slot:item="props">
                    <a :href="'/'+props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text }}</a>
                  </template>
                </v-breadcrumbs>
            </v-container>
      {{ marche.nom }}
    </v-app>
    <AppFooter />
  </template>
  <script setup>
    import AppHeader from '../layouts/AppHeader.vue';
    import AppFooter from '@/layouts/AppFooter.vue';
    import {getMarche} from '@/conf/api/marche';
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import {useRoute} from "vue-router";
    const primaryColor = '#18542c';
    const items = ref([
        {
          text: 'Accueil',
          disabled: false,
          href: ''
        },
        {
          text: 'Marché',
          disabled: false,
          href: 'marche'
        }
    ])

    const marche = ref(null);
    const route = useRoute()


    async function getMarcheFromId(id) {
      marche.value = await getMarche(id);
    }

    onMounted(() => {
      getMarcheFromId(route.params.id)
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
