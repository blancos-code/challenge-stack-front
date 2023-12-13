<template>
    <v-container fluid class="pa-0 hero-section"
                 style="background-color: rgba(36, 47, 33, 1)"
    >
        <v-img :src="heroImage"
               class="white--text align-end w-100"
               style="filter: blur(3px);
           filter: brightness(100%);
           opacity: 0.5;"
        >
            <v-container fill-height fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="6">
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </v-container>
</template>
<script>
export default {
    name: 'HeroImage',
    props: {
        heroImage: {}
    }
}
</script>
<style>
.hero-section {
}
</style>
