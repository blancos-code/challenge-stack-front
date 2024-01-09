<template>
  <v-container
    class="d-flex flex-row justify-content-between"
  >
    <v-sheet
      color="brown-lighten-5"
      class="ms-4 d-flex align-center flex-wrap"
      style="height: 600px; width: 600px;"
    >
      <div>
        <h1>
          Joyeux marchés locaux
        </h1>
        <h3
          class="text-grey-darken-2 font-weight-light"
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
    <v-img
      src="../assets/elMarche.jpg"
      alt="Description"
      width="600"
    >
    </v-img>
  </v-container>
</template>
<script>
export default {
    name: 'HeroText'
}
</script>
<style>
body {
    background-color: #EFEBE9;
}
</style>
