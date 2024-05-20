import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Font Awesome libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faXTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add the icons to the library
library.add(faInstagram, faXTwitter, faFacebook, faLinkedin)

const app = createApp(App)

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon)

// Use the router
app.use(router)

// Mount the app
app.mount('#app')
