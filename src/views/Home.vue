<template>
  <AppBar />
  <Main />
</template>

<script setup>
  import Main from '@/components/Main.vue'
  import axios from "axios";
  import AppBar from "@/layouts/default/AppBar.vue";

  async function handleDeadBackend() {
    let response = '';

    try {
      await axios.get(import.meta.env.VITE_API_URL + "/health").then((res) => {
        response = res.data;
      });
    } catch (e) {
    } finally {
      if (response === "") {
        alert("Backend de l'application introuvable. Essayez de redémarrer le serveur ou configurez l'url de l'api dans le .env.local");
      }
    }
  }

  handleDeadBackend();
</script>
