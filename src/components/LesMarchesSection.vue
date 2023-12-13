<template>
    <v-col
        cols="12"
        color="white"
        elevation="0"
        class="pt-8"
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
                >
                    <v-layout
                            row
                            wrap
                            class="align-start"
                    >
                        <v-carousel show-arrows="hover">
                            <v-carousel-item
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    cover
                            >
                            <h2 class="text-black ps-8 pt-2 pb-1">
                                Le marché de Rives
                            </h2>
                            </v-carousel-item>

                            <v-carousel-item
                                    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                                    cover
                            >
                            <h2 class="text-white ps-8 pt-2 pb-1">
                                Le marché de Grenoble
                            </h2>
                            </v-carousel-item>

                            <v-carousel-item
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    cover
                            >
                                <h1 class="text-white ms-8 mt-2">
                                    Le marché du Texas
                                </h1>
                            </v-carousel-item>
                        </v-carousel>
                    </v-layout>
                </v-card>
                <v-card>
                    <v-card-item
                            class="ms-6"
                    >
                        <v-card-title>
                            Les marchés
                        </v-card-title>
                        <v-card-subtitle>
                            Découvrez les marchés les plus populaires
                        </v-card-subtitle>
                        <v-card-text>
                            <p>
                                Les noix c'est trop bien.
                                En plus estelle peut vous les parfumer
                                <br>
                                pour le double du prix + elle peut vous faire une prestation spéciale
                            </p>
                        </v-card-text>
                        <v-card-actions
                                class="d-flex justify-end"
                        >
                            <v-btn text>Trouver un marché</v-btn>
                        </v-card-actions>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'LesMarchesSection'
}
</script>
