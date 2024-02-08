<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container
    class="d-flex flex-row justify-content-between"
  >
    <v-sheet
      color="brown-lighten-5"
      class="ms-6 d-flex align-center flex-wrap mx-auto px-4"
      style="height: 600px; width: 600px;"
    >
      <div>
        <h1>
          Joyeux marchés locaux
        </h1>
        <h3
          class="text-grey font-weight-light"
        >
          Faites vivre l'économie locale en explorant les produits uniques et artisanaux
          de vos commerçants de proximité, réunis en un seul endroit pour simplifier votre expérience d'achat
        </h3>
        <v-sheet
          class="d-flex align-center mt-4"
          color="brown-lighten-5"
        >
          <v-btn
            class="text-white"
            style="background-color: #18542c"
            :to="{name: 'RechercheMarche'}"
          >
          Trouver un marché
          </v-btn>
          <v-btn
            color="white"
            class="ms-4 text-black"
            :to="{name: 'RechercheProducteur'}"
          >
            Rencontrer un producteur
          </v-btn>
        </v-sheet>
      </div>
    </v-sheet>
    <v-img
      src="elMarche.jpg"
      alt="Description"
      width="600"
    >
    </v-img>
  </v-container>
</template>

<script setup>

//import HeroSection from "@/components/HeroSection.vue";

</script>

<style>
h1{
  color: #18542c;
}
body {
  background-color: #EFEBE9;
}
</style>

