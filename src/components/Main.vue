<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
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
          Trouvez un marché près de chez vous. Pas de chez vous ? <br>
          Pas de soucis, on vous offre une maison contre votre âme. <br>
          Joyeux deal !
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
          >
            Rencontrer un producteur
          </v-btn>
        </v-sheet>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup>

import HeroSection from "@/components/HeroSection.vue";

</script>

<style>
body {
  background-color: #EFEBE9;
}
</style>

