import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(VueSweetalert2)
app.use(Vue3Toasity)
app.mount('#app')
