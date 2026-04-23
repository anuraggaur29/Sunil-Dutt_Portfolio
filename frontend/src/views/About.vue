<template>
  <div class="about">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <img src="/sunil-dutt-main.jpeg" alt="Sunil Dutt - LIC Insurance Agent" class="profile-image">
        </div>
        <div class="about-text">
          <h1>About Sunil Dutt</h1>
          <p class="intro">
            Sunil Dutt is a licensed and experienced LIC insurance agent serving Jind, Haryana and surrounding areas.
            With over 10 years of dedicated experience in life insurance, Sunil has helped hundreds of families secure
            their financial future through tailored insurance solutions.
          </p>

          <h2>Professional Credentials</h2>
          <ul class="credentials-list">
            <li>Licensed LIC Agent (IRDAI Registration)</li>
            <li>10+ Years of Insurance Experience</li>
            <li>Expert in LIC Plans & Schemes</li>
            <li>Member of LIC Agent Association</li>
            <li>Commitment to Client Satisfaction</li>
          </ul>

          <h2>Why Choose Me?</h2>
          <div class="why-choose-grid">
            <div class="feature">
              <span class="icon">🎯</span>
              <h3>Personalized Service</h3>
              <p>Each client gets customized insurance solutions based on their unique needs</p>
            </div>
            <div class="feature">
              <span class="icon">📚</span>
              <h3>Expert Knowledge</h3>
              <p>Deep understanding of LIC products and benefits</p>
            </div>
            <div class="feature">
              <span class="icon">⏰</span>
              <h3>Quick Support</h3>
              <p>Available on phone, WhatsApp, and email for queries</p>
            </div>
            <div class="feature">
              <span class="icon">✅</span>
              <h3>Transparent Dealing</h3>
              <p>Clear information about plans with no hidden charges</p>
            </div>
          </div>

          <h2>Community Involvement</h2>
          <p>
            Sunil is actively involved in his local community and believes in spreading financial awareness.
            He regularly conducts sessions on the importance of life insurance and helps families plan their
            financial security.
          </p>

          <h2>Contact Information</h2>
          <div class="contact-info">
            <p><strong>Phone:</strong> {{ agentPhone }}</p>
            <p><strong>Email:</strong> {{ agentEmail }}</p>
            <p><strong>WhatsApp:</strong> <a :href="whatsappLink" target="_blank">{{ agentWhatsApp }}</a></p>
            <p><strong>Office Location:</strong> {{ agentAddress }}</p>
            <p><strong>Hours:</strong> Monday - Saturday, 9 AM - 6 PM</p>
          </div>

          <div class="cta-section">
            <h3>Ready to Secure Your Future?</h3>
            <RouterLink to="/contact" class="btn btn-primary">Get In Touch</RouterLink>
          </div>
        </div>
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
      agentPhone: import.meta.env.VITE_AGENT_PHONE || '+91 9416662922',
      agentEmail: import.meta.env.VITE_AGENT_EMAIL || 'dutt2785@gmail.com',
      agentWhatsApp: import.meta.env.VITE_AGENT_WHATSAPP || '919416662922',
      agentAddress: import.meta.env.VITE_AGENT_ADDRESS || 'Jind, Haryana, India 126102'
    }
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${import.meta.env.VITE_AGENT_WHATSAPP || '919416662922'}?text=Hi%20Sunil%20Dutt`
    }
  }
}
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
}

.about-image {
  position: sticky;
  top: 100px;
}

.profile-placeholder {
  display: none;
}

.profile-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

h1 {
  color: #001f3f;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  color: #001f3f;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
}

.credentials-list {
  list-style: none;
  margin-bottom: 2rem;
}

.credentials-list li {
  padding: 0.7rem 0;
  padding-left: 2rem;
  position: relative;
  color: #555;
}

.credentials-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #FF6B35;
  font-weight: bold;
  font-size: 1.2rem;
}

.why-choose-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #FF6B35;
}

.feature .icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.feature h3 {
  color: #001f3f;
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.feature p {
  font-size: 0.9rem;
  color: #666;
}

.contact-info {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.contact-info p {
  margin: 0.7rem 0;
  color: #555;
}

.contact-info a {
  color: #0074D9;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.cta-section {
  background: linear-gradient(135deg, #FF6B35 0%, #ffb366 100%);
  padding: 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;
}

.cta-section h3 {
  margin-bottom: 1rem;
  color: white;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: white;
  color: #FF6B35;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-image {
    position: static;
  }

  h1 {
    font-size: 2rem;
  }

  .profile-placeholder {
    font-size: 80px;
  }
}
</style>
