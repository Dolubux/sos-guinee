import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers/index.route'



const app = createApp(App)
app.use(router)
router.isReady().then(() => {
    app.mount('#app')
});


