<template>
  <v-container
  class="mt-8"
  color="brown-lighten-5"
  >
    <v-row justify="space-between">
      <h2
        class="mx-8"
      >
        Marchés joyeux
      </h2>
      <div
      class="w-50 d-flex justify-content-center align-items-center"
      >

      <v-text-field
        autofocus
        class="mx-4"
        bg-color="white"
        placeholder="Adresse"
        variant="outlined"
        single-line
        prepend-inner-icon="mdi-magnify"
        density="compact"
      >
      </v-text-field>

      <v-text-field
        class="mx-4"
        bg-color="white"
        placeholder="Date"
        variant="outlined"
        single-line
        prepend-inner-icon="mdi-calendar"
        density="compact"
        type="date"
      >
      </v-text-field>
        <v-btn
          class="mx-4 text-white"
          style="background-color: #18542c"
          icon="mdi-magnify"
          size="small"
        >
        </v-btn>
      </div>
    </v-row>
  </v-container>

</template>

<script setup>

</script>
