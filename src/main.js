import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import routes from "./route.js";

import VueSplide from "@splidejs/vue-splide";

const app = createApp(App);
app.use(routes);
app.use(VueSplide);

app.mount("#app");
