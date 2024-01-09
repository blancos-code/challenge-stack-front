<template>
  <AppBar />
  <Main />
  <AppFooter/>
</template>

<script setup>
import Main from '@/components/Main.vue'
import AppBar from "@/layouts/default/AppBar.vue";
import {handleDeadBackend} from "@/conf/api/healthcheck";
import AppFooter from "@/views/AppFooter.vue";

handleDeadBackend();




</script>
