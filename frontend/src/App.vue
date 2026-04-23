<template>
  <div id="app-container">
    <header>
      <nav class="navbar">
        <div class="container">
          <div class="logo">
            <h1>Sunil Dutt</h1>
            <p>{{ $t('header.agent') }}</p>
          </div>
          <ul class="nav-menu">
            <li><RouterLink to="/">{{ $t('nav.home') }}</RouterLink></li>
            <li><RouterLink to="/about">{{ $t('nav.about') }}</RouterLink></li>
            <li><RouterLink to="/plans">{{ $t('nav.plans') }}</RouterLink></li>
            <li><RouterLink to="/calculator">{{ $t('nav.calculator') }}</RouterLink></li>
            <li><RouterLink to="/claims">{{ $t('nav.claims') }}</RouterLink></li>
            <li><RouterLink to="/contact">{{ $t('nav.contact') }}</RouterLink></li>
            <li><RouterLink to="/blog">{{ $t('nav.blog') }}</RouterLink></li>
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>{{ $t('footer.address') }}</h3>
            <p>{{ $t('header.phone') }}: {{ agentPhone }}</p>
            <p>{{ $t('header.email') }}: {{ agentEmail }}</p>
            <p>{{ $t('header.whatsapp') }}: {{ agentWhatsApp }}</p>
            <p>{{ $t('footer.address') }}: {{ agentAddress }}</p>
          </div>
          <div class="footer-section">
            <h3>{{ $t('footer.quickLinks') }}</h3>
            <ul>
              <li><RouterLink to="/plans">{{ $t('nav.plans') }}</RouterLink></li>
              <li><RouterLink to="/calculator">{{ $t('nav.calculator') }}</RouterLink></li>
              <li><RouterLink to="/claims">{{ $t('nav.claims') }}</RouterLink></li>
              <li><RouterLink to="/blog">{{ $t('nav.blog') }}</RouterLink></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>{{ $t('footer.legalCompliance') }}</h3>
            <ul>
              <li><RouterLink to="/privacy">{{ $t('footer.copyright') }}</RouterLink></li>
              <li><a href="#">{{ $t('privacy.termsOfUse') }}</a></li>
              <li><a href="#">{{ $t('privacy.disclaimers') }}</a></li>
              <li><a href="#">{{ $t('footer.irdaiReg') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Sunil Dutt - LIC Agent. {{ $t('footer.copyright') }}</p>
          <p class="disclaimer">Life Insurance is a subject matter of solicitation.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    LanguageSwitcher
  },
  data() {
    return {
      agentPhone: import.meta.env.VITE_AGENT_PHONE,
      agentEmail: import.meta.env.VITE_AGENT_EMAIL,
      agentWhatsApp: import.meta.env.VITE_AGENT_WHATSAPP,
      agentAddress: import.meta.env.VITE_AGENT_ADDRESS
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: bold;
}

.logo p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
  font-weight: 500;
}

.nav-menu a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

main {
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
}

footer {
  background: #001f3f;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  color: #FF6B35;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li,
.footer-section p {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #FF6B35;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.disclaimer {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .navbar .container {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .logo {
    width: 100%;
    text-align: center;
  }

  .nav-menu {
    width: 100%;
    justify-content: center;
  }
}
</style>
