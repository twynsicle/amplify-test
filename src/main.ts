import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Amplify
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import AmplifyVue from '@aws-amplify/ui-vue';

// Components
import { Cropper } from 'vue-advanced-cropper';
import { createPinia } from 'pinia';

Amplify.configure(awsExports);

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

const app = createApp(App);
app.component('cropper', Cropper);

app.use(AmplifyVue);
app.use(vuetify);
app.use(pinia);

app.mount('#app');
