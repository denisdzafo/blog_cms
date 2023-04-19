import { createApp } from 'vue';
import Index from './Index.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css'
import { createPinia } from 'pinia'
import endPointPlugin from "./services/endPointPlugin.js";

const app = createApp({
    components: { Index },
});

app.use(router);
app.use(createPinia());
app.use(endPointPlugin);



app.mount('#app');
