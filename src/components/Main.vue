<template>
  <v-sheet
    color="white"
    class="mt-16"
  >

    <MarcheImage/>
    <LesMarchesSection/>
    <LesProducteursSection/>

  </v-sheet>
</template>

<script>

import {defineComponent} from "vue";
import MarcheImage from "@/components/MarcheImage.vue";
import LesMarchesSection from "@/components/LesMarchesSection.vue";
import LesProducteursSection from "@/components/LesProducteursSection.vue";

export default defineComponent({
  components: {LesProducteursSection, LesMarchesSection, MarcheImage}
})
</script>

