<template>
  <AppHeader/>
  <v-app>
    <v-container class="mt-5 mb-5" v-if="marche">
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
      <p
        class="description-producteur"

      >
        <v-card-subtitle
          class="ma-0 pa-0"
        >
          Description
        </v-card-subtitle>
        {{ marche.adresse }}
      </p>
      <p
        class="description-producteur"
        style="margin-bottom: 2.5em"
      >
        <v-card-subtitle
          class="ma-0 pa-0"
        >
          Dates
        </v-card-subtitle>
          du {{ formatDate(marche.dateDebut) }} au {{ formatDate(marche.dateFin) }}
      </p>
      <v-divider></v-divider>
      <div class="add-commentaires">
        <h3>Commentaire</h3>
        <div>
          <div class="write-comment">
            <v-text-field
              class="text-field-title"
              style="width: 100%; margin: 2px"
              placeholder="Le titre de votre commentaire"
              label="Titre"
              v-model="newTitleComm"
              type="text"
              outlined
              clearable></v-text-field>
            <v-text-field
              class="note-field"
              placeholder="/5"
              v-model="newNoteComm"
              style="width: 10%; margin: 2px"
              :min="0"
              :max="5"
              label="Note"
              type="number"
              variant="outlined"
              clearable>

            </v-text-field>
          </div>
            <v-textarea
              style="margin: 2px"
              placeholder="Ecrire un commentaire à ce producteur"
              label="Commentaire"
              v-model="newContenuComm"
              type="text"
              outlined
              clearable>

            </v-textarea>

          <v-btn
            @click="addNewComm"
            style="margin-top: 0; background-color: #18542c; color: white"
            class="btn-send"
            elevation="0"
          >Envoyer
          </v-btn>
        </div>


      </div>

      <div v-for="comment in marche.commentaireMarches" class="commentaires">
        <div class="card text-start">
          <div class="card-body">
            <h4 class="card-title">{{ comment.titre }}</h4>
            <em class="note-commentaire">{{ comment.note }} / 5</em>
            <p class="card-text">{{ comment.contenu }}</p>
            <em>- {{ comment.redacteur.prenom }} {{ comment.redacteur.nom }}</em>
          </div>
        </div>
      </div>

    </v-container>

  </v-app>
  <AppFooter/>
</template>
<script setup>
import AppHeader from '../layouts/AppHeader.vue';
import AppFooter from '@/layouts/AppFooter.vue';
import {getMarche} from '@/conf/api/marche';
import {onMounted} from 'vue';
import {addCommentMarche} from '@/conf/api/marche';
import {ref} from 'vue';
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
    href: 'marche/' + route.params.id
  }
])

const marche = ref("");
const newContenuComm = ref('');
const newTitleComm = ref("");
const newNoteComm = ref("");

async function getProducteurFromId(id) {
  marche.value = await getMarche(id);
}
function formatDate(date) {
  return new Date(date).toLocaleDateString("fr-FR")
}

async function addNewComm() {
  console.log("Création d'un commentaire")

  const params = {
    titre: newTitleComm.value,
    note: parseInt(newNoteComm.value),
    contenu: newContenuComm.value,
  }

  loaderStore.loading = true;
  try {
    await addCommentMarche(params, route.params.id).then((res) => {
      console.log(res);
    });
  } catch (e) {
    //
  }
  loaderStore.loading = false;
}


onMounted(() => {
  getProducteurFromId(route.params.id)
})

</script>
<style scoped>

.image-producteur {
  margin-left: 2.5rem;
}

.write-comment {
  display: flex;
}

.text-field-title {
  margin: 12px;
}

.btn-send {
  align-self: center;
}

.note-commentaire {
  color: #18542c;
}

.add-commentaires {
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

.card {
  background-color: #efebe9;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

.flex {
  display: flex;
}

.v-application {
  background-color: #efebe9 !important;
}

::v-deep .v-breadcrumbs {
  padding: 0 0 1rem 0;
}

h1, .no-data-found, a {
  color: v-bind(primaryColor);
}

a {
  text-decoration: none;
}

.description-producteur {
  margin-top: 1.5rem;
}
</style>
