<template>
    <AppHeader/>
    <v-app>
            <v-container class="mt-5">
                <h1
                >Les Marchés</h1>
               <v-breadcrumbs :items="items">
                  <template v-slot:item="props">
                    <a :href="'/'+props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text }}</a>
                  </template>
                </v-breadcrumbs>
                <p>Retrouvez vos producteurs préférés aux différents marchés.</p>
                <v-row class="mt-5" v-if="marches?.length > 0">
                    <v-col cols="12" md="6">
                        <v-text-field
                        v-model="searchDate"
                        label="Rechercher par date"
                        type="date"
                        @update:model-value="filteredMarkets()"
                        outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                        v-model="searchLocation"
                        label="Rechercher"
                        outlined
                        @update:model-value="filteredMarkets()"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-container class="mt-5" v-if="marchesFiltres?.length > 0">
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      hover 
                      :v-for="{ market } in marchesFiltres"
                    >
                      <v-card-item>
                        <v-card-title>
                          {{market.nom}}
                        </v-card-title>
                        <v-card-subtitle>
                          {{ market.adresse }}
                        </v-card-subtitle>
                      </v-card-item>
                      <v-card-text>
                        <img :src="market.image" :alt="market.nom">
                      </v-card-text>
                    </v-card>                  
                </v-container>
                <p v-else-if="marches === undefined || marches?.length === 0" class="mt-5 no-data-found">Il n'a pas de marchés...</p>
                
                <p v-else class="mt-5 no-data-found">Il n'a pas de marché correspondant à votre recherche...</p>
                
        
            </v-container>
    </v-app>
  </template>
  <script setup props="searchedDate, searchLocation">
    import AppHeader from './../views/AppHeader.vue';
    import { getMarches } from '@/conf/api/marche';
    import { useMarchesStore } from '@/store/marches';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    const primaryColor = '#18542c';
    const items = ref([
        {
          text: 'Accueil',
          disabled: false,
          href: ''
        },
        {
          text: 'Marchés',
          disabled: false,
          href: 'marches'
        }
    ])
    const marcheStore = useMarchesStore();
    const {marches} = storeToRefs(marcheStore);
    const marchesFiltres = ref([]);
    //const  search = ref('');
    const searchDate = ref('');
    const searchLocation = ref('');
      function filteredMarkets(){        
          marchesFiltres.value = marches?.value?.filter(marche => {
            const dateMatch = searchDate.value ? marche.dateDebut.includes(searchDate.value) || marche.dateFin.includes(searchDate.value) : true;
            const locationMatch = searchLocation.value ? marche.adresse.toLowerCase().includes(searchLocation.value.toLowerCase()) : true; //compare strings in lower case
            return locationMatch && dateMatch;
          })
        }

      onMounted(async () => {
        await getMarches().then((res) => {
            marches.value = res["hydra:member"];
            filteredMarkets();
          });
      });
    
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
  