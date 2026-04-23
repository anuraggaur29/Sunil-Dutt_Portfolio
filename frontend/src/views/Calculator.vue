<template>
  <div class="calculator">
    <div class="container">
      <h1>Premium Calculator</h1>
      <p class="intro">Get an instant estimate of your life insurance premium</p>

      <div class="calculator-grid">
        <div class="calculator-form">
          <h2>Enter Your Details</h2>
          
          <div class="form-group">
            <label for="plan-type">Plan Type *</label>
            <select v-model="form.planType" id="plan-type">
              <option value="">Select Plan</option>
              <option value="term">Term Insurance</option>
              <option value="endowment">Endowment</option>
              <option value="moneyback">Money Back</option>
              <option value="wholelife">Whole Life</option>
              <option value="pension">Pension</option>
            </select>
          </div>

          <div class="form-group">
            <label for="age">Your Age *</label>
            <div class="input-with-suffix">
              <input
                type="number"
                id="age"
                v-model.number="form.age"
                min="18"
                max="65"
                placeholder="18-65"
              />
              <span>years</span>
            </div>
          </div>

          <div class="form-group">
            <label for="sum-assured">Desired Coverage *</label>
            <div class="input-with-suffix">
              <input
                type="range"
                id="sum-assured"
                v-model.number="form.sumAssured"
                min="100000"
                max="10000000"
                step="100000"
              />
            </div>
            <p class="range-value">₹ {{ formatAmount(form.sumAssured) }}</p>
          </div>

          <div class="form-group">
            <label for="term">Policy Term *</label>
            <div class="input-with-suffix">
              <input
                type="number"
                id="term"
                v-model.number="form.term"
                min="5"
                max="40"
                placeholder="5-40"
              />
              <span>years</span>
            </div>
          </div>

          <button @click="calculatePremium" class="btn btn-primary" :disabled="!formValid">
            Calculate Premium
          </button>

          <p class="disclaimer">
            <strong>Note:</strong> This is an estimate. Actual premium may vary based on medical underwriting and other factors.
          </p>
        </div>

        <div class="calculator-result">
          <h2>Premium Estimate</h2>
          <div v-if="result" class="result-card">
            <div class="result-item">
              <span class="label">Plan Type:</span>
              <span class="value">{{ result.planType }}</span>
            </div>
            <div class="result-item">
              <span class="label">Age:</span>
              <span class="value">{{ result.age }} years</span>
            </div>
            <div class="result-item">
              <span class="label">Sum Assured:</span>
              <span class="value">₹ {{ formatAmount(result.sumAssured) }}</span>
            </div>
            <div class="result-item">
              <span class="label">Policy Term:</span>
              <span class="value">{{ result.term }} years</span>
            </div>

            <div class="divider"></div>

            <div class="premium-summary">
              <div class="premium-item">
                <span class="premium-label">Monthly Premium</span>
                <span class="premium-value">₹ {{ Math.round(result.monthlyPremium) }}</span>
              </div>
              <div class="premium-item">
                <span class="premium-label">Quarterly Premium</span>
                <span class="premium-value">₹ {{ Math.round(result.quarterlyPremium) }}</span>
              </div>
              <div class="premium-item annual">
                <span class="premium-label">Annual Premium</span>
                <span class="premium-value">₹ {{ Math.round(result.annualPremium) }}</span>
              </div>
            </div>

            <div class="result-note">
              <p><strong>{{ result.note }}</strong></p>
              <p>{{ result.disclaimer }}</p>
            </div>

            <button @click="contactForQuote" class="btn btn-secondary">Get Exact Quote</button>
          </div>

          <div v-else class="empty-state">
            <p>Fill in your details and click "Calculate Premium" to see the estimate</p>
          </div>
        </div>
      </div>

      <div class="tax-benefits">
        <h2>Tax Benefits</h2>
        <div class="benefits-content">
          <p>
            Life insurance premiums paid towards qualifying policies are eligible for deduction under Section 80C of the Income Tax Act.
            The deduction is limited to ₹1.5 lakh per financial year.
          </p>
          <p>
            <strong>Note:</strong> This is general information. Please consult a tax professional for personalized advice based on your income and circumstances.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        planType: this.$route.query.plan || '',
        age: 35,
        sumAssured: 5000000,
        term: 20
      },
      result: null,
      loading: false
    }
  },
  computed: {
    formValid() {
      return this.form.planType && this.form.age && this.form.sumAssured && this.form.term
    }
  },
  methods: {
    formatAmount(amount) {
      if (amount >= 10000000) {
        return (amount / 10000000).toFixed(1) + ' Cr'
      }
      if (amount >= 100000) {
        return (amount / 100000).toFixed(1) + ' L'
      }
      return amount.toLocaleString('en-IN')
    },
    async calculatePremium() {
      if (!this.formValid) return

      this.loading = true
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
        const response = await axios.post(`${apiUrl}/calculator/estimate`, {
          age: this.form.age,
          sumAssured: this.form.sumAssured,
          term: this.form.term,
          planType: this.form.planType
        })
        this.result = response.data
      } catch (error) {
        console.error('Calculation error:', error)
        alert('Error calculating premium. Please try again.')
      } finally {
        this.loading = false
      }
    },
    contactForQuote() {
      this.$router.push({ path: '/contact', query: { type: 'quote' } })
    }
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

.calculator-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.calculator-form,
.calculator-result {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h2 {
  color: #001f3f;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

input,
select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
}

input:focus,
select:focus {
  outline: none;
  border-color: #0074D9;
  box-shadow: 0 0 0 3px rgba(0, 116, 217, 0.1);
}

input[type="range"] {
  padding: 0;
  cursor: pointer;
}

.input-with-suffix {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-suffix input {
  margin-bottom: 0;
}

.input-with-suffix span {
  position: absolute;
  right: 1rem;
  color: #999;
  font-size: 0.9rem;
}

.range-value {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: #FF6B35;
  margin-top: 0.5rem;
}

.btn {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #0074D9;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #0052a3;
}

.btn-primary:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn-secondary {
  background: #FF6B35;
  color: white;
  margin-top: 1rem;
}

.btn-secondary:hover {
  background: #e55a28;
}

.disclaimer {
  font-size: 0.85rem;
  color: #999;
  margin-top: 1rem;
}

.result-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #FF6B35;
}

.result-item {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
}

.result-item:last-of-type {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: #333;
}

.value {
  color: #666;
}

.divider {
  height: 2px;
  background: #ddd;
  margin: 1.5rem 0;
}

.premium-summary {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.premium-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.premium-item.annual {
  border-bottom: none;
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
}

.premium-label {
  font-weight: 600;
}

.premium-value {
  font-size: 1.3rem;
  font-weight: bold;
  color: #FF6B35;
}

.premium-item.annual .premium-value {
  color: #FFD700;
}

.result-note {
  background: #fff3cd;
  border: 1px solid #ffc107;
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem 0;
}

.result-note p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #856404;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #999;
}

.tax-benefits {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.tax-benefits h2 {
  color: #001f3f;
  margin-bottom: 1rem;
}

.benefits-content p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .calculator-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
