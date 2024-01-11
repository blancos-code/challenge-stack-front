<template>
    <footer
            style="background-color: #18542c; color:white; padding: 2em"
            class="d-flex flex-row align-center"

    >
        <div><b>Joyeux marché locaux</b><br>© 2024 Mon Entreprise</div>
        <div
                class="ml-auto d-flex flex-row"
        >
          <v-btn
            variant="text"
            style="padding-inline: 3em"
            to="/mentions-legales"
          >
            Protection des données personnelles
          </v-btn>

          <v-btn
          variant="text"
          style="padding-inline: 3em"
          to="/mentions-legales"
          >
            Mentions légales
          </v-btn>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'AppFooter'
}
</script>
<style>
  footer{
    position:sticky;
    bottom: 0;
    width: 100%;
  }
</style>
