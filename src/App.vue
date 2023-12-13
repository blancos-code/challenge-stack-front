
<template>
  <router-view />
</template>
<script setup>
import {onMounted} from "vue";
onMounted(() => {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDF72aWUnupogATBWkoqP9SjHtkkJGbJK0&libraries=places')
    document.head.appendChild(recaptchaScript)
  });
</script>
