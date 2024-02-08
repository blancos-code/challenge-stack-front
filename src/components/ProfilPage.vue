<template>
    <AppHeader/>
    <v-app>
            <v-container class="mt-5">
                
                <h1>Mon Profil</h1>
               <v-breadcrumbs :items="items">
                  <template v-slot:item="props">
                    <a :href="'/'+props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text }}</a>
                  </template>
                </v-breadcrumbs>
                <p>Bienvenue sur votre profil utilisateur</p>
                <table style="border-collapse:collapse;border-spacing:0" class="tg">
    
                        <tr>
                            <td>Nom</td>
                            <td>
                                <v-text-field  
                                    v-model="name"
                                    class="input"
                                    type="text"
                                    @update:model-value="editName()"
                                    outlined>
                                </v-text-field>
                            </td>
                        </tr>
                        <tr>
                            <td>Prénom</td>
                            <td>
                                <v-text-field 
                                    v-model="surname"
                                    class="input"
                                    type="text"
                                    @update:model-value="editSurname()"
                                    outlined>
                                </v-text-field>
                            </td>
                        </tr>
                </table>


            </v-container>
    </v-app>
    <AppFooter />
  </template>
    <script setup props="searchedDate, searchLocation">
    
    import AppHeader from '../layouts/AppHeader.vue';
    import AppFooter from '@/layouts/AppFooter.vue';
    import { ref } from 'vue';
    const primaryColor = '#18542c';
    const items = ref([
        {
          text: 'Accueil',
          disabled: false,
          href: ''
        },
        {
          text: 'Profil',
          disabled: false,
          href: 'profil'
        }
    ])

    const name = ref('Nom')
    const surname = ref('Prénom')
    
        function editName(){
            //change name
        }

        function editSurname(){
            //change surname
        }

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

  .input{
    width: 15rem;
  }

  a {
    color:v-bind(primaryColor);
    text-decoration: none;
  }
  </style>
