/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
// Import and configure VueGoogleAutocomplete
import * as VueGoogleAutocomplete from "vue-google-autocomplete";
// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";

const app = createApp(App);
registerPlugins(app);
app.use(VueGoogleAutocomplete, {
  apiKey: "AIzaSyDF72aWUnupogATBWkoqP9SjHtkkJGbJK0",
});
app.mount("#app");
