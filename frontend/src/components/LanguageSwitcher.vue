<template>
  <div class="language-switcher">
    <button 
      :class="['lang-btn', { active: $i18n.locale === 'en' }]"
      @click="changeLanguage('en')"
      title="English"
    >
      EN
    </button>
    <span class="separator">|</span>
    <button 
      :class="['lang-btn', { active: $i18n.locale === 'hi' }]"
      @click="changeLanguage('hi')"
      title="हिंदी"
    >
      HI
    </button>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('language', lang)
    }
  }
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-btn {
  background: none;
  border: 1px solid #0074D9;
  color: #0074D9;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background-color: #0074D9;
  color: white;
}

.lang-btn.active {
  background-color: #0074D9;
  color: white;
}

.separator {
  color: #666;
}

@media (max-width: 768px) {
  .lang-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
}
</style>
