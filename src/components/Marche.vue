<template>
  <AppHeader/>
  <v-app>
          <v-container class="mt-5" v-if="marche">
            <div class="flex">
              <div>
                  <h1>{{ marche.nom }} - {{ marche.categorie.nom }}</h1>
                  <v-breadcrumbs :items="items">
                    <template v-slot:item="props">
                      <a :href="'/'+props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text }}</a>
                    </template>
                  </v-breadcrumbs>
                  <div class="flex">
                    <div v-for="n in marche.note">
                      <img src="../assets/star.png" :alt="n">
                    </div>
                  </div>
              </div>
            </div>
              <p class="description-producteur">{{ marche.adresse }}</p>
              <p class="description-producteur">{{ marche.dateDebut }} à {{ marche.dateFin }}</p>
              <div class="add-commentaires">
                <div>
                  <v-text-field 
                  class="text-field-title" 
                  style="width: 100%; margin: 2px"
                  placeholder="Le titre de votre commentaire"
                  label="Titre"
                  v-model="newTitleComm"
                  type="text"
                  outlined
                  clearable></v-text-field>
                  <div class="write-comment">
                    <v-text-field 
                  class="text-field" 
                  style="width: 90%; margin: 2px"
                  placeholder="Ecrire un commentaire à ce producteur"
                  label="Commentaire"
                  v-model="newContenuComm"
                  type="text"
                  outlined
                  clearable>

                  </v-text-field>
                  <v-text-field 
                  class="note-field" 
                  placeholder="/5"
                  v-model="newNoteComm"
                  style="width: 10%; margin: 2px"
                  :min="0"
                  :max="5"
                  label="Note"
                  type="number"
                  outlined
                  clearable>

                  </v-text-field >
                  
                  </div>
                  <v-btn @click="addNewComm()" style="margin-top: 0; background-color: #18542c; color: white" class="btn-send">Envoyer</v-btn>
                </div>
                
                
                
              </div>

              <div v-for="comment in marche.commentaireMarches" class="commentaires">
                  <div class="card text-start">
                    <div class="card-body">
                      <h4 class="card-title">{{comment.titre}}</h4>
                      <em class="note-commentaire">{{comment.note}} / 5</em>
                      <p class="card-text">{{comment.contenu}}</p>
                      <em>- {{comment.redacteur.prenom }} {{comment.redacteur.nom }}</em>
                    </div>
                  </div>
                </div>
    
          </v-container>
    
  </v-app>
  <AppFooter />
</template>
<script setup>
  import AppHeader from '../layouts/AppHeader.vue';
  import AppFooter from '@/layouts/AppFooter.vue';
  import { getMarche } from '@/conf/api/marche';
  import { onMounted } from 'vue';
  import { addCommentMarche } from '@/conf/api/marche';
  import { ref } from 'vue';
  import {useRoute} from "vue-router";
  import {useLoaderStore} from "@/store/loader";
  const loaderStore = useLoaderStore();
  const primaryColor = '#18542c';
  const route = useRoute()
  const items = ref([
      {
        text: 'Accueil',
        disabled: false,
        href: ''
      },
      {
        text: 'Marche',
        disabled: false,
        href: 'marche/'+route.params.id
      }
  ])

 const marche = ref("");
 const newContenuComm = ref('');
 const newTitleComm = ref("");
 const newNoteComm = ref("");
   
  async function getProducteurFromId(id) {
      marche.value = await getMarche(id);
  }

  async function addNewComm(){
      // let payload = 
      // {
      //   titre: newTitleComm.value,
      //   note: parseInt(newNoteComm.value),
      //   contenu: newContenuComm.value,
      //   producteur: {
      //     description: producteur.value.description,
      //     utilisateur: {
      //       nom: producteur.value.utilisateur.nom,
      //       prenom: producteur.value.utilisateur.prenom,
      //       email: producteur.value.utilisateur.email,
      //       tel: producteur.value.utilisateur.tel,
      //       adresse: producteur.value.utilisateur.adresse,
      //       isBanned: producteur.value.utilisateur.isBanned
      //     },
      //     note: parseInt(producteur.value.note),
      //     commentaireProducteurs: producteur.value.commentaireProducteurs,
      //     prixProduits : producteur.value.prixProduits,
      //     prixProduit: producteur.value.prixProduit
      //   },
      //   redacteur: {
      //     nom: producteur.value.utilisateur.nom,
      //     prenom: producteur.value.utilisateur.prenom,
      //     email: producteur.value.utilisateur.email,
      //     tel: producteur.value.utilisateur.tel,
      //     adresse: producteur.value.utilisateur.adresse,
      //     isBanned: producteur.value.utilisateur.isBanned
      //   }
      // };
        let payload = '';
      loaderStore.loading = true;
      await addCommentMarche(payload).then((res) => {
        console.log(res);
      });
      loaderStore.loading = false;
    
  }


  onMounted(() => {
    getProducteurFromId(route.params.id)
  })

</script>
<style scoped>

.image-producteur{
margin-left: 2.5rem;
}
.write-comment{
  display: flex;
}
.text-field-title{
  margin: 12px;
}
.btn-send{
  align-self: center;
}
.note-commentaire{
color: #18542c;
}

.add-commentaires{
margin-top: 2.5rem;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
}
.commentaires {
  margin-top: 1rem;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
}

.card{
  background-color: #efebe9;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

.flex{
  display: flex;
}

.v-application{
  background-color: #efebe9 !important;
}
::v-deep .v-breadcrumbs{
  padding: 0 0 1rem 0;
}
h1, .no-data-found, a{
  color: v-bind(primaryColor);
}

a {
  text-decoration: none;
}

.description-producteur{
  margin-top: 1.5rem;
}
</style>