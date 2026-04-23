<template>
  <div class="plans">
    <div class="container">
      <h1>LIC Plans & Products</h1>
      <p class="intro">Explore our range of LIC insurance plans designed to meet your financial goals and family's security needs.</p>

      <div class="plans-filters">
        <button
          v-for="type in planTypes"
          :key="type"
          @click="selectedType = type"
          :class="['filter-btn', { active: selectedType === type }]"
        >
          {{ type }}
        </button>
      </div>

      <div class="plans-grid">
        <div v-for="plan in filteredPlans" :key="plan.id" class="plan-card">
          <div class="plan-header">
            <h2>{{ plan.name }}</h2>
            <p class="plan-type">{{ plan.type }}</p>
            <p v-if="plan.uin" class="uin">UIN: {{ plan.uin }}</p>
          </div>

          <div class="plan-details">
            <div class="detail-item">
              <span class="label">Entry Age:</span>
              <span class="value">{{ plan.entry_age_min }} - {{ plan.entry_age_max }} years</span>
            </div>
            <div class="detail-item">
              <span class="label">Policy Term:</span>
              <span class="value">{{ plan.policy_term_min }} - {{ plan.policy_term_max }} years</span>
            </div>
            <div class="detail-item">
              <span class="label">Min Sum Assured:</span>
              <span class="value">₹{{ formatAmount(plan.min_sum_assured) }}</span>
            </div>
            <div class="detail-item">
              <span class="label">Premium Mode:</span>
              <span class="value">{{ plan.premium_mode }}</span>
            </div>
          </div>

          <div class="plan-benefits">
            <h4>Key Benefits</h4>
            <p>{{ plan.key_benefits }}</p>
          </div>

          <div class="plan-actions">
            <button class="btn btn-outline" @click="openCalculator(plan.name)">Calculate Premium</button>
            <a v-if="plan.brochure_url" :href="plan.brochure_url" target="_blank" class="btn btn-secondary">View Brochure</a>
          </div>
        </div>
      </div>

      <div v-if="filteredPlans.length === 0" class="no-plans">
        <p>Loading plans... If plans don't load, please contact us for details.</p>
        <RouterLink to="/contact" class="btn btn-primary">Contact Us</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      selectedType: 'All',
      planTypes: ['All', 'Whole Life', 'Term', 'Endowment', 'Money Back', 'Pension'],
      plans: [
        {
          id: 1,
          name: 'Jeevan Umang',
          type: 'Whole Life',
          uin: '512N312V03',
          entry_age_min: 0,
          entry_age_max: 55,
          policy_term_min: 15,
          policy_term_max: 30,
          min_sum_assured: 200000,
          premium_mode: 'Annual/Monthly',
          key_benefits: 'Annual survival benefits (8% of SA) from end of PPT to maturity; Lump sum at death or maturity; High-SA rebates available',
          brochure_url: 'https://example.com/jeevan-umang.pdf'
        },
        {
          id: 2,
          name: 'Bima Kavach',
          type: 'Term',
          uin: '512N360V01',
          entry_age_min: 18,
          entry_age_max: 55,
          policy_term_min: 10,
          policy_term_max: 45,
          min_sum_assured: 500000,
          premium_mode: 'Annual/Monthly',
          key_benefits: 'Pure protection; Flexible terms up to age 100; Two death-benefit options (Level/Increasing); Special rates for women',
          brochure_url: 'https://example.com/bima-kavach.pdf'
        },
        {
          id: 3,
          name: 'New Money Back - 20',
          type: 'Money Back',
          uin: '512N280V03',
          entry_age_min: 13,
          entry_age_max: 50,
          policy_term_min: 20,
          policy_term_max: 20,
          min_sum_assured: 200000,
          premium_mode: 'Annual/Monthly',
          key_benefits: 'Protection + periodic payouts; Survival benefits at specified durations; Death cover throughout term',
          brochure_url: 'https://example.com/money-back.pdf'
        },
        {
          id: 4,
          name: 'Jeevan Tarun',
          type: 'Whole Life',
          uin: '512N299V03',
          entry_age_min: 0,
          entry_age_max: 12,
          policy_term_min: 25,
          policy_term_max: 25,
          min_sum_assured: 50000,
          premium_mode: 'Annual/Monthly',
          key_benefits: 'Child savings plan; Annual survival benefits; Maturity benefit at age 25; Premium Waiver Rider available',
          brochure_url: 'https://example.com/jeevan-tarun.pdf'
        }
      ]
    }
  },
  computed: {
    filteredPlans() {
      if (this.selectedType === 'All') {
        return this.plans
      }
      return this.plans.filter(plan => plan.type === this.selectedType)
    }
  },
  methods: {
    formatAmount(amount) {
      return (amount / 100000).toFixed(1) + ' L'
    },
    openCalculator(planName) {
      this.$router.push({ path: '/calculator', query: { plan: planName } })
    }
  },
  mounted() {
    // In production, fetch plans from API
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #001f3f;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.plans-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.6rem 1.2rem;
  border: 2px solid #ddd;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.filter-btn:hover {
  border-color: #0074D9;
  color: #0074D9;
}

.filter-btn.active {
  background: #0074D9;
  color: white;
  border-color: #0074D9;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.plan-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.plan-header {
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  color: white;
  padding: 1.5rem;
  border-bottom: 4px solid #FF6B35;
}

.plan-header h2 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
}

.plan-type {
  margin: 0.3rem 0;
  opacity: 0.9;
}

.uin {
  font-size: 0.85rem;
  opacity: 0.8;
}

.plan-details {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f5f5f5;
}

.detail-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: #333;
}

.value {
  color: #666;
  text-align: right;
}

.plan-benefits {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.plan-benefits h4 {
  color: #001f3f;
  margin-bottom: 0.5rem;
}

.plan-benefits p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

.plan-actions {
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s;
  flex: 1;
  text-align: center;
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

.btn-secondary {
  background: #FF6B35;
  color: white;
}

.btn-secondary:hover {
  background: #e55a28;
}

.no-plans {
  text-align: center;
  padding: 2rem;
}

.no-plans p {
  color: #666;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  .plans-filters {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
