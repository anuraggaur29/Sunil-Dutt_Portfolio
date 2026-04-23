<template>
  <div class="contact">
    <div class="container">
      <h1>Contact Us</h1>
      <p class="intro">Get in touch with us for quotes, inquiries, or policy support</p>

      <div class="contact-grid">
        <div class="contact-info">
          <h2>Contact Information</h2>

          <div class="info-item">
            <h3>📞 Phone</h3>
            <p><a :href="`tel:${agentPhone}`">{{ agentPhone }}</a></p>
            <p class="note">Monday - Saturday, 9 AM - 6 PM IST</p>
          </div>

          <div class="info-item">
            <h3>💬 WhatsApp</h3>
            <p><a :href="whatsappLink" target="_blank">Chat on WhatsApp</a></p>
            <p class="note">Instant messaging for quick queries</p>
          </div>

          <div class="info-item">
            <h3>✉️ Email</h3>
            <p><a :href="`mailto:${agentEmail}`">{{ agentEmail }}</a></p>
            <p class="note">Response within 24 hours</p>
          </div>

          <div class="info-item">
            <h3>📍 Office Location</h3>
            <p>{{ agentAddress }}, Haryana</p>
            <p class="note">Visit by appointment</p>
          </div>

          <div class="social-links">
            <h3>Connect With Us</h3>
            <div class="social-icons">
              <a :href="`mailto:${agentEmail}`" title="Email">📧</a>
              <a :href="`https://wa.me/${agentWhatsApp}`" target="_blank" title="WhatsApp">💬</a>
            </div>
          </div>
        </div>

        <div class="contact-form-section">
          <h2>Send us a Message</h2>
          <form @submit.prevent="submitContact">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                placeholder="Your name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                required
                placeholder="10-digit phone"
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <select v-model="form.subject" id="subject" required>
                <option value="">Select a subject</option>
                <option value="quote">Insurance Quote</option>
                <option value="policy-info">Policy Information</option>
                <option value="claim">Claim Related</option>
                <option value="general">General Inquiry</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                placeholder="Your message..."
                rows="5"
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary" :disabled="loading">
                {{ loading ? 'Sending...' : 'Send Message' }}
              </button>
              <button type="reset" class="btn btn-outline">Clear</button>
            </div>

            <div v-if="message" :class="['alert', messageType]">
              {{ message }}
            </div>
          </form>
        </div>
      </div>

      <section class="map-section">
        <h2>Find Us on Map</h2>
        <div class="map-placeholder">
          <p>📍 Location: {{ agentAddress }}, Haryana, India</p>
          <p>For exact location and directions, contact us via WhatsApp or phone</p>
        </div>
      </section>

      <section class="faq">
        <h2>Quick FAQs</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>When can I call?</h3>
            <p>Monday to Saturday, 9 AM to 6 PM IST. WhatsApp is available 24/7 for messages.</p>
          </div>
          <div class="faq-item">
            <h3>How quickly do you respond?</h3>
            <p>Phone calls are answered immediately during office hours. Email replies within 24 hours.</p>
          </div>
          <div class="faq-item">
            <h3>Can I get a quote online?</h3>
            <p>Yes! Use our premium calculator or submit a quote request through the form above.</p>
          </div>
          <div class="faq-item">
            <h3>What if I have an urgent claim?</h3>
            <p>Contact immediately via phone or WhatsApp. Claims can be processed on priority.</p>
          </div>
        </div>
      </section>
    </div>
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
        subject: this.$route.query.type === 'quote' ? 'quote' : '',
        message: ''
      },
      loading: false,
      message: '',
      messageType: 'success',
      agentPhone: import.meta.env.VITE_AGENT_PHONE,
      agentEmail: import.meta.env.VITE_AGENT_EMAIL,
      agentAddress: import.meta.env.VITE_AGENT_ADDRESS,
      agentWhatsApp: import.meta.env.VITE_AGENT_WHATSAPP
    }
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${import.meta.env.VITE_AGENT_WHATSAPP}?text=Hi%20Sunil%20Dutt`
    }
  },
  methods: {
    async submitContact() {
      this.loading = true
      this.message = ''

      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
        // Using leads endpoint for contact form
        await axios.post(`${apiUrl}/leads`, {
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          message: `[${this.form.subject}] ${this.form.message}`,
          plan_interest: this.form.subject
        })

        this.message = '✓ Message sent successfully! We will contact you soon.'
        this.messageType = 'success'
        this.form = { name: '', email: '', phone: '', subject: '', message: '' }
      } catch (error) {
        this.message = 'Error sending message. Please try again.'
        this.messageType = 'error'
        console.error('Contact form error:', error)
      } finally {
        this.loading = false
      }
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

h2 {
  color: #001f3f;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  height: fit-content;
}

.info-item {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.info-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-item h3 {
  color: #FF6B35;
  margin-bottom: 0.5rem;
}

.info-item a {
  color: #0074D9;
  text-decoration: none;
  font-weight: 600;
}

.info-item a:hover {
  text-decoration: underline;
}

.info-item p {
  color: #555;
  margin: 0.3rem 0;
}

.note {
  font-size: 0.85rem;
  color: #999;
  font-style: italic;
}

.social-links h3 {
  color: #001f3f;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #001f3f;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s;
}

.social-icons a:hover {
  background: #FF6B35;
}

.contact-form-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
select,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
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
  flex: 0.5;
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
}

.alert.error {
  background: #f8d7da;
  color: #721c24;
}

.map-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
}

.map-placeholder {
  background: #f9f9f9;
  border: 2px dashed #ddd;
  padding: 3rem;
  border-radius: 8px;
  text-align: center;
  color: #666;
}

.map-placeholder p {
  margin: 0.5rem 0;
}

.faq {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.faq-item {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #FF6B35;
}

.faq-item h3 {
  color: #001f3f;
  margin-bottom: 0.5rem;
}

.faq-item p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2rem;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  .form-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn {
    flex: 1 !important;
    padding: 0.7rem 1rem;
  }

  .contact-info h2 {
    font-size: 1.6rem;
  }

  .info-item h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.4rem;
  }

  .contact-info h2,
  .quote-section h2,
  .faq h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .info-item {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .info-item h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .info-item p {
    font-size: 0.9rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    font-size: 16px;
    padding: 0.6rem;
  }

  textarea {
    min-height: 100px;
  }

  .form-actions {
    gap: 0.5rem;
  }

  .btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .faq-item {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .faq-item h3 {
    font-size: 0.95rem;
  }

  .faq-item p {
    font-size: 0.85rem;
  }
}
</style>
