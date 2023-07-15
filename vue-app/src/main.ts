import { createApp } from "vue";
import { createPinia } from "pinia";
import FontAwesomeIcon from './font/fontawesome';
import vue3GoogleLogin from 'vue3-google-login';

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_CLIENT_ID_GG
})

app.mount("#app");
