import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/main.css";
import VueSplide from "@splidejs/vue-splide";
import router from "@/router/router.js";

import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";
import SliderComp from '@/components/SliderComp.vue';


const app = createApp(App);

app.use(router);
app.use(VueSplide);
app.use(SequentialEntrance);
app.component('SliderComp', SliderComp);
app.mount("#app");
