import { defineStore } from 'pinia';
import {ref} from "vue";

export const useLoaderStore = defineStore('loader', () => {
  const loading = ref(false);

  return {
    loading
  }
});
