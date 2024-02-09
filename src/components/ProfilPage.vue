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
                <div class="flex">
                        <div>
                            <table>
                            <tr>
                                <td>Photo de profil</td>
                                <td>
                                    <v-file-input
                                        accept="image/*"
                                        class="input"
                                        v-model="profilImage"
                                        @update:model-value="editProfilImage()"
                                        outlined
                                    ></v-file-input>
                                </td>
                            </tr>

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
                            <tr>
                                <td>Email</td>
                                <td>
                                    <v-text-field 
                                        v-model="email"
                                        class="input"
                                        type="text"
                                        @update:model-value="editEmail()"
                                        outlined>
                                    </v-text-field>
                                </td>
                            </tr>
                    </table>
                    <a @click="deleteAccount()" class="delete-account">Supprimer mon compte</a>
                        </div>
                        <div class="div-no-img" v-if="!utilisateur.image">
                          <p class="no-image">Vous n'avez pas encore d'image de profil</p>
                        </div>
                    <v-img
                        class="profilImage"
                        aspect-ratio="16/9"
                        cover
                        :src="utilisateur.image"
                    ></v-img>
                </div>
                


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
    const utilisateur = ref('')
    const name = ref('Nom')
    const surname = ref('Prénom')
    const email = ref('votre.email@gmail.com')
    const profilImage = ref('')
        function editName(){
            //change name
        }

        function editSurname(){
          console.log('value', surname.value);
        }

        function editEmail(){
            //change email
        }

        function editProfilImage(){
            //change profil image
        }

        function deleteAccount(){
            let awnser = confirm('Êtes-vous certain(e) de vouloir supprimer votre compte ?')
            if(awnser){
                //supprimer le compte
            }
        }

  </script>
  <style scoped>

  .v-application{
    background-color: #efebe9 !important;
  }
  ::v-deep .v-breadcrumbs{
    padding: 0 0 1rem 0;
  }

  .delete-account{
    margin-top: 2rem;
  }

  .profilImage{
    width: 150px;
    margin-left: 2.5rem;
  }
  .flex{
    display: flex;
  }
.div-no-img{
  display: flex;
}
  .no-image{
    color: #18542c;
    margin-left: 5rem;
    margin-top: auto;
    margin-bottom: auto;
  }

  h1{
    color: v-bind(primaryColor);
  }
  table{
    margin-top: 2.5rem;
  }

  .input{
    width: 15rem;
    height: 4rem;
    margin-left: 2rem;
  }

  a {
    color:v-bind(primaryColor);
    text-decoration: none;
  }
  </style>
