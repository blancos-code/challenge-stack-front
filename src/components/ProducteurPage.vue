<template>
    <AppHeader/>
    <v-app>
            <v-container class="mt-5" v-if="producteur">
              <div class="flex">
                <div>
                    <h1>{{ producteur.utilisateur.prenom }} {{ producteur.utilisateur.nom }}</h1>
                    <v-breadcrumbs :items="items">
                      <template v-slot:item="props">
                        <a :href="'/'+props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text }}</a>
                      </template>
                    </v-breadcrumbs>
                    <div class="flex">
                      <div v-for="n in producteur.note">
                        <img src="../assets/star.png" :alt="n">
                      </div>
                    </div>
                  </div>
                <img v-if="producteur.utilisateur.imageFile" class="image-producteur" :src="producteur.utilisateur.imageFile" width="150">
              </div>
              <v-card-subtitle
                class="ma-0 pa-0"
              >
                Description
              </v-card-subtitle>
                <p class="description-producteur" style="margin-top: 0px" v-html="producteur.description"></p>


                <div class="add-commentaires">

                  <div>
                    <h3>Commentaire</h3>
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

                    </v-text-field >
                </div>
                      <v-text-field
                    class="text-field"
                    style="margin: 2px"
                    placeholder="Ecrire un commentaire à ce producteur"
                    label="Commentaire"
                    v-model="newContenuComm"
                    type="text"
                    outlined
                    clearable>

                    </v-text-field>
                    </div>
                    <v-btn @click="addNewComm()" elevation="0" style="margin-top: 0; background-color: #18542c; color: white" class="btn-send">Envoyer</v-btn>
                  </div>




                <div v-for="comment in producteur.commentaireProducteurs" class="commentaires">
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
    import {getProducteur} from '@/conf/api/producteur';
    import { onMounted } from 'vue';
    import { addCommentProducteur } from '@/conf/api/producteur';
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
          text: 'Producteur',
          disabled: false,
          href: 'producteur/'+route.params.id
        }
    ])

   const producteur = ref("");
   const newContenuComm = ref('');
   const newTitleComm = ref("");
   const newNoteComm = ref("");

    async function getProducteurFromId(id) {
        producteur.value = await getProducteur(id);
    }

    async function addNewComm(){
        let payload =
        {
          titre: newTitleComm.value,
          note: parseInt(newNoteComm.value),
          contenu: newContenuComm.value,
          producteur: {
            description: producteur.value.description,
            utilisateur: {
              nom: producteur.value.utilisateur.nom,
              prenom: producteur.value.utilisateur.prenom,
              email: producteur.value.utilisateur.email,
              tel: producteur.value.utilisateur.tel,
              adresse: producteur.value.utilisateur.adresse,
              isBanned: producteur.value.utilisateur.isBanned,
              imageName: producteur.value.utilisateur.imageName,
              imageFile: producteur.value.utilisateur.imageFile
            },
            note: parseInt(producteur.value.note),
            commentaireProducteurs: producteur.value.commentaireProducteurs,
            prixProduits : producteur.value.prixProduits,
            prixProduit: producteur.value.prixProduit
          },
          redacteur: {
            nom: producteur.value.utilisateur.nom,
            prenom: producteur.value.utilisateur.prenom,
            email: producteur.value.utilisateur.email,
            tel: producteur.value.utilisateur.tel,
            adresse: producteur.value.utilisateur.adresse,
            isBanned: producteur.value.utilisateur.isBanned
          }
        };

        loaderStore.loading = true;
        await addCommentProducteur(payload).then((res) => {
            producteur.value = res["hydra:member"];
            console.log(producteur.value)
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
