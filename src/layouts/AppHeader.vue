<template>
    <header>
        <v-container
        class="px-4 container-header"
        color="brown-lighten-5"
        elevation="1"
    >
            <v-row>

            <h2
                class="mr-8"
            ><a href="/">Marchés joyeux</a>

            </h2>
            <v-btn
                class="text-white btn-header"
                :to="{name: 'RechercheProducteur'}"
            >
            Producteurs
            </v-btn>
            <v-btn
                class="text-white btn-header"
                :to="{name: 'RechercheMarche'}"
            >
            Marchés
            </v-btn>
            </v-row>
          <v-btn
            class="admin"
            icon="mdi-tools"
            href="https://localhost:8000/admin"
            flat
          >
          </v-btn>
            <v-btn
              class="connexion"
              prepend-icon="mdi-login"
              :to="{name: 'ProfilPage'}"
            >
              Connexion
            </v-btn>
          <v-btn
            class="signup"
            prepend-icon="mdi-account"
            :to="{name: 'ProfilPage'}"
          >
            S'inscrire
          </v-btn>
        </v-container>
    </header>
      <v-progress-linear
        color="green"
        indeterminate
        height="4"
        :hidden="!loaderStore.loading"
      ></v-progress-linear>
</template>
<script setup>

import {useLoaderStore} from "@/store/loader";

const loaderStore = useLoaderStore()

</script>
<style scoped>
.btn-header{
    background-color: none !important;
    border:none;
    box-shadow: none;
    color:#18542c !important;
}
header {
 top: 0;
 background-color: #ffffff;
 width: 100%;
 height: 4rem;
 display: flex;
 align-content: center;
}
.connexion{
    position: absolute;
    right : 12rem;
}

.admin{
  position: absolute;
  right : 22rem;
  top: 0.8em;
}

.signup {
  position: absolute;
  right: 2rem;
  background-color: #18542c;
  color: white;
}

.container-header{
    display: flex;
}

 h2{
    color: #18542c;
    margin-top: auto;
    margin-bottom: auto;
 }
  a {
    color: #18542c;
    text-decoration: none;
    margin-top: auto;
    margin-bottom: auto;
  }
  </style>
