<template>
  <AppBar />
  <Main />
</template>

<script setup>
import Main from '@/components/Main.vue'
import AppBar from "@/layouts/default/AppBar.vue";
import {handleDeadBackend} from "@/conf/api/healthcheck";

handleDeadBackend();




</script>
