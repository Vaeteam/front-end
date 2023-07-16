import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import FontAwesomeIcon from './font/fontawesome';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import vue3GoogleLogin from 'vue3-google-login';

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_CLIENT_ID_GG
})

app.mount("#app");
