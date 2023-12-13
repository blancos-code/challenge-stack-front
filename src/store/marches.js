import { defineStore } from 'pinia';
import {ref} from "vue";

export const useMarchesStore = defineStore('marches', () => {
  const marches = ref([]);

  return {
    marches
  }
});
