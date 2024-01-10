 <template>
    <AppHeader/>
    <v-app>
            <v-container class="mt-5">
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
                        label="Rechercher par date"
                        type="date"
                        @update:model-value="filteredMarkets()"
                        outlined
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                        v-model="searchLocation"
                        label="Rechercher par lieu"
                        outlined
                        @update:model-value="filteredMarkets()"
                        ></v-text-field>
                    </v-col>
                </v-row>
    
            <!-- Résultats de la recherche -->
            <v-data-table
                :headers="headers"
                :items="marchesFiltres"
                :search="search"
                class="elevation-1"
                >
            </v-data-table> 
        
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
    const  search = ref('');
    const searchDate = ref('');
    const searchLocation = ref('');
    const  headers = ref([
          {title: 'Nom', key: 'nom'  },
          {title: 'Date début', key: 'dateDebut'},
          {title: 'Date fin', key: 'dateFin'},
          {title: 'Adresse', key: 'adresse'  },
        ]);
    const props = defineProps(['searchedDate', 'searchedLocation']);
    function filteredMarkets(){        
        marchesFiltres.value = marches?.value?.filter(marche => {
          const dateMatch = searchDate.value ? marche.dateDebut === searchDate.value || marche.dateFin === searchDate.value : true;
          const locationMatch = searchLocation.value ? marche.adresse.toLowerCase().includes(searchLocation.value.toLowerCase()) : true; //compare strings in lower case
         console.log("date match", dateMatch);
         console.log("searchDate.value", searchDate.value);
         console.log("marche.dateDebut", marche.dateDebut);
          console.log("locationMatch", locationMatch);
          return locationMatch;
        })
      }

      onMounted(async () => {
       console.log('props', props.value);
      console.log('searched date : ', props.searchedDate);
      console.log('searched location : ', props.searchedLocation);
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

  h1{
    color: v-bind(primaryColor);
  }

  a {
    color:v-bind(primaryColor);
    text-decoration: none;
  }
  </style>
  