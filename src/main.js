import { createApp } from 'vue';
import App from '@/App.vue';
import '@/assets/main.css';
import VueSplide from '@splidejs/vue-splide';
import router from '@/router/router.js';

import SliderComp from '@/components/SliderComp.vue';

const app = createApp(App);
app.use(VueSplide);
app.use(router);

app.component('SliderComp', SliderComp);

app.mount('#app');
