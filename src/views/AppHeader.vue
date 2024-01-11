<template>
    <header>
        <v-container
    class="px-4 container-header"
    color="brown-lighten-5"
    >
            <v-row>
        
            <h2
                class="mr-8"
            ><a href="/">Marchés joyeux</a>
                
            </h2>
            <a class="mx-8" href="/producteurs">Producteurs</a>
            <a class="mx-8" href="/marches">Marchés</a>
            <button class="connexion">Connexion</button>
            </v-row>
        </v-container>
    </header>
</template>
<script>
export default {
    name: 'AppHeader'
}
</script>
<style scoped>
header {
 top: 0;
 background-color: #ffffff;
 width: 100%;
 height: 5rem;
 display: flex;
 align-content: center;
}
.connexion{
    position: absolute;
    right : 2rem;
    top : 1.5rem;
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
  