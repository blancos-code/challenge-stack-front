 <template>
    <AppHeader/>
    <v-app>
            <v-container class="mt-5">
                <!-- Barre de recherche -->
                <h1
                >Trouver un producteur</h1>
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
                        label="Rechercher"
                        outlined
                        @update:model-value="filteredMarkets()"
                        ></v-text-field>
                    </v-col>
                </v-row>

              <v-card
                v-for="producteur in producteursFiltres"
                class="mb-8 card"
                style="width: 48%;"
                @click.prevent="openProducteur(producteur.id)"
              >
                <v-card-title
                  class="text-green"
                  style="background-color: rgba(0, 0, 0, 0.03)"
                >
                  Marché de {{ producteur.nom }}
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text
                  class="adresse"
                  @click.stop="searchMaps(producteur.adresse)"
                  style="cursor: pointer;"
                >
                  <v-icon>
                    mdi-map-marker
                  </v-icon>
                  Adresse: {{ producteur.nom }}
                </v-card-text>
              </v-card>

            </v-container>

    </v-app>
    <AppFooter />
  </template>
  <script setup>
  import AppHeader from '../layouts/AppHeader.vue';
  import AppFooter from '@/layouts/AppFooter.vue';
    import { getProducteurs } from '@/conf/api/producteur';
    import { useProducteursStore } from '@/store/producteurs';
    import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
    import { ref } from 'vue';


  function searchMaps(adresse) {
    document.location.href = 'https://www.google.fr/maps/search/' + adresse + '/';
  }

  function openProducteur(producteur) {
    document.location.href = 'https://www.google.fr/'
  }


  const items = ref([
        {
          text: 'Accueil',
          disabled: false,
          href: ''
        },
        {
          text: 'Rechercher producteur',
          disabled: false,
          href: 'rechercheproducteur'
        }
    ])
    const primaryColor = '#18542c';
    const producteursStore = useProducteursStore();
    const {producteurs} = storeToRefs(producteursStore);
    const producteursFiltres = ref([]);
    const search = ref('');
    const searchDate = ref('');
    const searchLocation = ref('');
    const  headers = ref([
          {title: 'Nom', key: 'nom'  },
          {title: 'Date début', key: 'dateDebut'},
          {title: 'Date fin', key: 'dateFin'},
          {title: 'Adresse', key: 'adresse'  },
        ]);
    function filteredMarkets(){
        producteursFiltres.value = producteurs?.value?.filter(producteur => {
          const dateMatch = searchDate.value ? producteur.dateDebut.includes(searchDate.value) || producteur.dateFin.includes(searchDate.value) : true;
          const locationMatch = searchLocation.value ? producteur.adresse.toLowerCase().includes(searchLocation.value.toLowerCase()) : true; //compare strings in lower case
          return locationMatch && dateMatch;
        })
      }

      onMounted(async () => {
        await getProducteurs().then((res) => {
            producteurs.value = res["hydra:member"];
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
