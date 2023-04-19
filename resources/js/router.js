import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Blog from './components/pages/Blog.vue';
import Register from './components/pages/Register.vue';
import Contact from './components/pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/register', component: Register },
  { path: '/contact', component: Contact },
  { path: '/blog', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
