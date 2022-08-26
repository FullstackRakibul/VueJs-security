import HomePage from '@/pages/HomePage.vue';
import WorkPage from '@/pages/WorkPage.vue';
import AgencyPage from '@/pages/AgencyPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/work',
    name: 'work',
    component: WorkPage,
  },
  {
    path: '/agency',
    name: 'agency',
    component: AgencyPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound,
  },
];

export default routes;
