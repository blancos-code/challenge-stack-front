<template>
  <AppHeader/>
  <Main />
  <AppFooter/>
</template>

<script setup>
import Main from '@/components/Main.vue'
import {handleDeadBackend} from "@/conf/api/healthcheck";
import AppFooter from "@/views/AppFooter.vue";
import AppHeader from './AppHeader.vue';

handleDeadBackend();




</script>
