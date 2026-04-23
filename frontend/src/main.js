import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import i18n from './i18n.js'

// Import views
import Home from './views/Home.vue'
import About from './views/About.vue'
import Plans from './views/Plans.vue'
import Calculator from './views/Calculator.vue'
import Claims from './views/Claims.vue'
import Contact from './views/Contact.vue'
import Blog from './views/Blog.vue'
import Privacy from './views/Privacy.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', component: Home, meta: { title: 'Home - LIC Agent Sunil Dutt' } },
  { path: '/about', component: About, meta: { title: 'About - Sunil Dutt' } },
  { path: '/plans', component: Plans, meta: { title: 'LIC Plans - Sunil Dutt' } },
  { path: '/calculator', component: Calculator, meta: { title: 'Premium Calculator' } },
  { path: '/claims', component: Claims, meta: { title: 'Claims & Service' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact Us' } },
  { path: '/blog', component: Blog, meta: { title: 'Blog & Resources' } },
  { path: '/privacy', component: Privacy, meta: { title: 'Privacy & Terms' } },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Update page title
router.afterEach((to) => {
  document.title = to.meta.title || 'LIC Agent - Sunil Dutt'
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
