<template>
  <v-layout>
    <v-app-bar
      :elevation="4"
      color="white"
      class="d-flex justify-space-between align-center"
    >
      <h2
      style="width: 300px"
      >
        <img
          alt="Vuetify Logo"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          height="30"
        />
        Les joyeuses noix
      </h2>
      <div>
        <v-btn>
          LES MARCHES
        </v-btn>
        <v-btn>
          LES PRODUCTEURS
        </v-btn>
      </div>
      <template v-slot:append>
        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
  </v-layout>

</template>

<script setup>
</script>
