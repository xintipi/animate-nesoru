import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import { routes } from './routes/routes'
import { TouchMove } from './directives/touch-move'

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router).directive('touch-move', TouchMove).mount('#app')
