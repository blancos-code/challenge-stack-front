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
    <AppFooter />
  </template>
    <script setup props="searchedDate, searchLocation">
    import AppHeader from '../layouts/AppHeader.vue';
    import AppFooter from '@/layouts/AppFooter.vue';
    import { getProducteurs } from '@/conf/api/producteur';
    import { useProducteursStore } from '@/store/producteurs';
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
          text: 'Producteurs',
          disabled: false,
          href: 'producteurs'
        }
    ])
    const producteurStore = useProducteursStore();
    const {producteurs} = storeToRefs(producteurStore);
    const producteursFiltres = ref([]);
    //const  search = ref('');
    const searchDate = ref('');
    const searchLocation = ref('');
      function filteredMarkets(){
        if(searchDate.value || searchLocation.value ){
          producteursFiltres.value = producteurs?.value?.filter(producteur => {
            const dateMatch = searchDate.value ? producteur.dateDebut.includes(searchDate.value) || producteur.dateFin.includes(searchDate.value) : true;
            const locationMatch = searchLocation.value ? producteur.adresse.toLowerCase().includes(searchLocation.value.toLowerCase()) : true; //compare strings in lower case
            return locationMatch && dateMatch;
          });
        }else{
          producteursFiltres.value = producteurs.value;
          return producteurs.value;
        }

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
