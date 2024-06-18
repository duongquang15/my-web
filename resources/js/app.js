import { createApp } from 'vue';
import Example from './components/ExampleComponent.vue';

const app = createApp({});
app.component('hello-world', Example);
app.mount('#app');