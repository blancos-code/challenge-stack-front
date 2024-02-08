<template>
  <AppHeader/>
  <v-app>
    <v-container class="mt-5 mb-10">
      <!-- Barre de recherche -->
      <h1
      >Trouver un marché</h1>
      <v-breadcrumbs :items="items">
        <template v-slot:item="props">
          <a :href="'/'+props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text }}</a>
        </template>
      </v-breadcrumbs>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="searchDate"
            label="Date"
            type="date"
            @update:model-value="filteredMarkets()"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="searchLocation"
            label="Adresse"
            outlined
            @update:model-value="filteredMarkets()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-sheet
        class="d-flex bg-transparent"
        style="flex-wrap: wrap; justify-content: space-between;"
      >
        <v-card
          v-for="marche in marchesFiltres"
          class="mb-8 card"
          style="width: 48%;"
          @click.prevent="openMarche(marche.id)"
        >
          <v-card-title
            class="text-green"
            style="background-color: rgba(0, 0, 0, 0.03)"
          >
            Marché de {{ marche.nom }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <b> Ce marché à lieu du {{ formatDate(marche.dateDebut) }} au {{ formatDate(marche.dateFin) }} </b>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text
            class="adresse"
            @click.stop="searchMaps(marche.adresse)"
            style="cursor: pointer;"
          >
            <v-icon>
              mdi-map-marker
            </v-icon>
            Adresse: {{ marche.adresse }}
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-container>

  </v-app>
  <AppFooter/>
</template>
<script setup>
import AppHeader from '../layouts/AppHeader.vue';
import AppFooter from '@/layouts/AppFooter.vue';
import {getMarches} from '@/conf/api/marche';
import {useMarchesStore} from '@/store/marches';
import {storeToRefs} from 'pinia';
import {onMounted} from 'vue';
import {ref} from 'vue';

const items = ref([
  {
    text: 'Accueil',
    disabled: false,
    href: ''
  },
  {
    text: 'Rechercher marché',
    disabled: false,
    href: 'recherchemarche'
  }
])
const primaryColor = '#18542c';
const marcheStore = useMarchesStore();
const {marches} = storeToRefs(marcheStore);
const marchesFiltres = ref([]);
const search = ref('');
const searchDate = ref('');
const searchLocation = ref('');
const headers = ref([
  {title: 'Nom', key: 'nom'},
  {title: 'Date début', key: 'dateDebut'},
  {title: 'Date fin', key: 'dateFin'},
  {title: 'Adresse', key: 'adresse'},
  {title: 'Actions', key: 'actions', sortable: false, align: 'center'},
]);

function filteredMarkets() {
  marchesFiltres.value = marches?.value?.filter(marche => {
    const dateMatch = searchDate.value ? marche.dateDebut.includes(searchDate.value) || marche.dateFin.includes(searchDate.value) : true;
    const locationMatch = searchLocation.value ? marche.adresse.toLowerCase().includes(searchLocation.value.toLowerCase()) : true; //compare strings in lower case
    return locationMatch && dateMatch;
  })
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("fr-FR")
}

function searchMaps(adresse) {
  document.location.href = 'https://www.google.fr/maps/search/' + adresse + '/';
}

function openMarche(marche) {
  document.location.href = 'https://www.google.fr/'
}


onMounted(async () => {
  await getMarches().then((res) => {
    marches.value = res["hydra:member"];
    filteredMarkets();
  });
});
</script>
<style scoped>

.v-application {
  background-color: #efebe9 !important;
}

::v-deep .v-breadcrumbs {
  padding: 0 0 1rem 0;
}

h1 {
  color: v-bind(primaryColor);
}

a {
  color: v-bind(primaryColor);
  text-decoration: none;
}

.adresse:hover {
  background-color: rgb(24, 84, 44);
  color: white;
}

.card {
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3); /* Augmentation de l'ombre portée */
  cursor: pointer;
}

</style>
