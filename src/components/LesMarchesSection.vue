<template>
  <v-col
    cols="12"
    elevation="0"
    class="pt-16"
  >
    <h2 class="text-black ps-8 pt-2 pb-1 text-center">
      Les marchés
    </h2>
    <v-divider></v-divider>
  </v-col>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          elevation="0"
        >
          <v-layout
            row
            wrap
            class="align-start"
            style="background-color: #e0fce4"
          >
            <v-card
              v-for="marche in getLimitedMarches(marches, 3)"
              :key="marche.id"

              :loading="loading"
              class="mx-auto mb-8"
              max-width="374"
            >
              <template v-slot:loader="{ isActive }">
                <v-progress-linear
                  :active="isActive"
                  color="deep-purple"
                  height="4"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                cover
                height="250"
                src="https://www.youschool.fr/wp-content/uploads/2023/03/youschool-devenir-boulanger.jpg"
              ></v-img>

              <v-card-item>
                <v-card-title>{{ marche.nom }}</v-card-title>

                <v-card-subtitle>
                  <span class="me-1">{{ marche.adresse }}</span>
                  <v-icon
                    color="error"
                    icon="mdi-map-marker"
                    size="small"
                  ></v-icon>
                </v-card-subtitle>
              </v-card-item>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :model-value="4.5"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                  ></v-rating>

                  <div class="text-grey ms-4">
                    4.5 (413)
                  </div>
                </v-row>
              </v-card-text>
              <v-card-text>
                  Du
                  {{ afficherDateEnFrancais(new Date(marche.dateDebut)) }}
                  <br>
                  Au
                  {{  afficherDateEnFrancais(new Date(marche.dateFin)) }}
              </v-card-text>

              <v-divider class="mx-4 mb-1"></v-divider>
              <v-card-actions>
                <v-btn
                  color="deep-purple-lighten-2"
                  variant="text"
                  @click="reserve"
                >
                  Contacter Frabice
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>

import {getMarches} from "@/conf/api/marche";
import {onMounted} from "vue";
import {useMarchesStore} from "@/store/marches";
import {storeToRefs} from "pinia";

const marchesStore = useMarchesStore()
const {marches} = storeToRefs(marchesStore)

onMounted(async () => {
  let response = await getMarches();
  marches.value = response["hydra:member"];
});

function getLimitedMarches(marchesList, max) {
  return marchesList.slice(0, max);
}

function afficherDateEnFrancais(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('fr-FR', options).format(date);
}


</script>
