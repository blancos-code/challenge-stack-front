<template>
  <AppHeader/>
  <Main />
  <AppFooter/>
</template>

<script setup>
import Main from '@/components/Main.vue'
import {handleDeadBackend} from "@/conf/api/healthcheck";
import AppFooter from "@/layouts/AppFooter.vue";
import AppHeader from '../layouts/AppHeader.vue';

handleDeadBackend();




</script>
