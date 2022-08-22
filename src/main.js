import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/main.css";
import VueSplide from "@splidejs/vue-splide";

import router from "@/router/router.js";

const app = createApp(App);

app.use(router);
app.use(VueSplide);

app.mount("#app");
