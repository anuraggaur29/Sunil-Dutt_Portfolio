<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>{{ $t('home.hero.title') }}</h1>
          <p class="tagline">{{ $t('home.hero.subtitle') }}</p>
          <div class="hero-cta">
            <button class="btn btn-primary" @click="scrollToQuote">{{ $t('home.hero.cta1') }}</button>
            <a :href="whatsappLink" class="btn btn-secondary" target="_blank">{{ $t('header.whatsapp') }} {{ $t('common.close') }}</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="placeholder-image">📋</div>
        </div>
      </div>
    </section>

    <!-- Value Propositions -->
    <section class="values">
      <div class="container">
        <h2>{{ $t('home.valueProp.title') }}</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="icon">🏛️</div>
            <h3>{{ $t('home.valueProp.prop1.title') }}</h3>
            <p>{{ $t('home.valueProp.prop1.desc') }}</p>
          </div>
          <div class="value-card">
            <div class="icon">💼</div>
            <h3>{{ $t('home.valueProp.prop2.title') }}</h3>
            <p>{{ $t('home.valueProp.prop2.desc') }}</p>
          </div>
          <div class="value-card">
            <div class="icon">⚡</div>
            <h3>{{ $t('home.valueProp.prop3.title') }}</h3>
            <p>{{ $t('home.valueProp.prop3.desc') }}</p>
          </div>
          <div class="value-card">
            <div class="icon">💰</div>
            <h3>{{ $t('home.valueProp.prop4.title') }}</h3>
            <p>{{ $t('home.valueProp.prop4.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Plans -->
    <section class="featured-plans">
      <div class="container">
        <h2>{{ $t('home.featured.title') }}</h2>
        <div class="plans-grid">
          <div class="plan-card">
            <h3>Jeevan Umang</h3>
            <p class="plan-type">Whole Life Savings Plan</p>
            <ul>
              <li>Lifelong Protection</li>
              <li>Annual Survival Benefits</li>
              <li>Flexible Premium Options</li>
            </ul>
            <RouterLink to="/plans" class="btn btn-outline">{{ $t('common.readMore') }}</RouterLink>
          </div>
          <div class="plan-card">
            <h3>Bima Kavach</h3>
            <p class="plan-type">Term Insurance</p>
            <ul>
              <li>High Coverage</li>
              <li>Flexible Terms</li>
              <li>Affordable Premiums</li>
            </ul>
            <RouterLink to="/plans" class="btn btn-outline">{{ $t('common.readMore') }}</RouterLink>
          </div>
          <div class="plan-card">
            <h3>New Money Back</h3>
            <p class="plan-type">Savings Plan</p>
            <ul>
              <li>Periodic Payouts</li>
              <li>Maturity Benefit</li>
              <li>Protection Cover</li>
            </ul>
            <RouterLink to="/plans" class="btn btn-outline">{{ $t('common.readMore') }}</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Calculator CTA -->
    <section class="calculator-cta">
      <div class="container">
        <h2>{{ $t('home.calculator.title') }}</h2>
        <p>{{ $t('home.calculator.subtitle') }}</p>
        <RouterLink to="/calculator" class="btn btn-primary">{{ $t('home.calculator.cta') }}</RouterLink>
      </div>
    </section>

    <!-- Quote Form Section -->
    <section class="quote-section" ref="quoteSection">
      <div class="container">
        <h2>{{ $t('home.hero.cta1') }}</h2>
        <QuoteForm />
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <h2>What Clients Say</h2>
        <div class="testimonials-grid">
          <div class="testimonial">
            <p class="quote">"Sunil Dutt guided me through the entire process with patience and expertise. Highly recommended!"</p>
            <p class="author">- Rajesh Kumar, Jind</p>
          </div>
          <div class="testimonial">
            <p class="quote">"Best decision I made for my family's security. Great customer service and reliable support."</p>
            <p class="author">- Priya Singh, Haryana</p>
          </div>
          <div class="testimonial">
            <p class="quote">"Clear explanations, affordable plans, and excellent follow-up. I trust Sunil Dutt completely."</p>
            <p class="author">- Amit Sharma, Local Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import QuoteForm from '../components/QuoteForm.vue'

export default {
  components: {
    RouterLink,
    QuoteForm
  },
  data() {
    return {
      whatsappPhone: import.meta.env.VITE_AGENT_WHATSAPP
    }
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${this.whatsappPhone}?text=Hi%20Sunil%20Dutt%2C%20I%20would%20like%20to%20know%20more%20about%20LIC%20plans`
    }
  },
  methods: {
    scrollToQuote() {
      this.$refs.quoteSection?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  color: white;
  padding: 4rem 0;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.tagline {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s;
  font-weight: 600;
}

.btn-primary {
  background: #FF6B35;
  color: white;
}

.btn-primary:hover {
  background: #e55a28;
  transform: translateY(-2px);
}

.btn-secondary {
  background: white;
  color: #001f3f;
}

.btn-secondary:hover {
  background: #f0f0f0;
}

.btn-outline {
  border: 2px solid #0074D9;
  background: transparent;
  color: #0074D9;
}

.btn-outline:hover {
  background: #0074D9;
  color: white;
}

.hero-image {
  text-align: center;
}

.placeholder-image {
  font-size: 8rem;
  opacity: 0.5;
}

.values {
  padding: 4rem 0;
  background: #f9f9f9;
}

.values h2,
.featured-plans h2,
.calculator-cta h2,
.quote-section h2,
.testimonials h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #001f3f;
}

.values-grid,
.plans-grid,
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card,
.plan-card,
.testimonial {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.value-card:hover,
.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.value-card .icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.plan-type {
  color: #FF6B35;
  font-weight: 600;
  margin: 0.5rem 0;
}

.plan-card ul {
  list-style: none;
  margin: 1.5rem 0;
  text-align: left;
}

.plan-card ul li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.featured-plans {
  padding: 4rem 0;
}

.calculator-cta {
  background: linear-gradient(135deg, #FF6B35 0%, #ffb366 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.calculator-cta p {
  font-size: 1.2rem;
  margin: 1rem 0 2rem;
}

.quote-section {
  padding: 4rem 0;
  background: #f9f9f9;
}

.testimonials {
  padding: 4rem 0;
}

.testimonial {
  text-align: left;
  border-left: 4px solid #FF6B35;
}

.quote {
  font-style: italic;
  margin-bottom: 1rem;
  color: #555;
}

.author {
  font-weight: 600;
  color: #001f3f;
}

@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
