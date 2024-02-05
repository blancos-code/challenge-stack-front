<template>
    <footer
            style="background-color: #18542c; color:white; padding: 0.6em; position: absolute; bottom: 0; width: 100%;"
            class="d-flex flex-row align-center"

    >
        <div><b>Joyeux marché locaux</b><br>© 2024 Marchés joyeux</div>
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

</script>
<style>
  footer{
    width: 100%;
  }
</style>
