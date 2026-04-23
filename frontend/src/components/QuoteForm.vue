<template>
  <div class="quote-form">
    <form @submit.prevent="submitForm">
      <div class="form-grid">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="your@email.com"
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            required
            placeholder="10-digit phone number"
          />
        </div>

        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            id="age"
            v-model.number="form.age"
            placeholder="Your age"
          />
        </div>

        <div class="form-group">
          <label for="plan">Interested Plan</label>
          <select v-model="form.plan_interest" id="plan">
            <option value="">Select a plan</option>
            <option value="jeevan-umang">Jeevan Umang</option>
            <option value="bima-kavach">Bima Kavach</option>
            <option value="money-back">Money Back</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="coverage">Desired Coverage</label>
          <input
            type="text"
            id="coverage"
            v-model="form.desired_coverage"
            placeholder="e.g., ₹10 Lakhs"
          />
        </div>
      </div>

      <div class="form-group full-width">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Tell us more about your needs..."
          rows="4"
        ></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" :disabled="loading">
          {{ loading ? 'Submitting...' : 'Get Quote' }}
        </button>
        <button type="reset" class="btn btn-outline">Clear</button>
      </div>

      <div v-if="message" :class="['alert', messageType]">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        age: null,
        plan_interest: '',
        desired_coverage: '',
        message: ''
      },
      loading: false,
      message: '',
      messageType: 'success'
    }
  },
  methods: {
    async submitForm() {
      this.loading = true
      this.message = ''

      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
        await axios.post(`${apiUrl}/leads`, this.form)

        this.message = '✓ Thank you! We will contact you soon.'
        this.messageType = 'success'
        this.form = {
          name: '',
          email: '',
          phone: '',
          age: null,
          plan_interest: '',
          desired_coverage: '',
          message: ''
        }
      } catch (error) {
        this.message = 'Error submitting form. Please try again.'
        this.messageType = 'error'
        console.error('Form submission error:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.quote-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 600px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #001f3f;
}

input,
select,
textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #0074D9;
  box-shadow: 0 0 0 3px rgba(0, 116, 217, 0.1);
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary {
  background: #FF6B35;
  color: white;
  flex: 1;
}

.btn-primary:hover:not(:disabled) {
  background: #e55a28;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-outline {
  border: 2px solid #ddd;
  background: transparent;
  color: #333;
}

.btn-outline:hover {
  border-color: #0074D9;
  color: #0074D9;
}

.alert {
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
}

.alert.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
