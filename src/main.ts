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

Amplify.configure(awsExports);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(AmplifyVue);
app.use(vuetify);

app.mount('#app');
