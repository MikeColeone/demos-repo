import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import EchartsDataZoom from './components/EchartsDataZoom.vue';
import EchartsSampling from './components/EchartsSampling.vue';
import { createPinia } from 'pinia';
const app = createApp(App);
app.component('EchartsDataZoom', EchartsDataZoom);
app.component('EchartsSampling', EchartsSampling);
const pinia = createPinia();
import router from './router/router';
app.use(pinia).use(router).mount('#app')
