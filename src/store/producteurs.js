import { defineStore } from 'pinia';
import {ref} from "vue";

export const useProducteursStore = defineStore('producteurs', () => {
  const producteurs = ref([]);

  return {
    producteurs
  }
});
