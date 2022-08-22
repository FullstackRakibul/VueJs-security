import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/main.css";
import VueSplide from "@splidejs/vue-splide";

import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";

import router from "@/router/router.js";

const app = createApp(App);

app.use(router);
app.use(VueSplide);
app.use(SequentialEntrance);

app.mount("#app");
