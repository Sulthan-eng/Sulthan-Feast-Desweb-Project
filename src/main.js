import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faFacebook);

const app = createApp(App)

app.use(router)  //router digunakan

app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)