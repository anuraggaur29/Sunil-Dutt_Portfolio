<template>
  <div class="privacy">
    <div class="container">
      <h1>Privacy Policy, Terms & Disclaimers</h1>

      <section class="policy-section">
        <h2>Privacy Policy</h2>
        
        <h3>1. Information We Collect</h3>
        <p>
          When you visit our website or submit forms, we may collect:
        </p>
        <ul>
          <li>Personal information (name, email, phone, address)</li>
          <li>Information about your insurance interests</li>
          <li>Technical information (IP address, browser type, page visits)</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>
          Your information is used to:
        </p>
        <ul>
          <li>Respond to your inquiries and provide insurance guidance</li>
          <li>Send quotes and information about LIC plans</li>
          <li>Improve our website and services</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>

        <h3>3. Data Protection</h3>
        <p>
          We protect your information with industry-standard security measures including:
        </p>
        <ul>
          <li>Encrypted data transmission (HTTPS)</li>
          <li>Secure database storage</li>
          <li>Regular security updates</li>
        </ul>

        <h3>4. Cookies</h3>
        <p>
          Our website uses cookies to enhance your experience. You can disable cookies in your browser settings.
        </p>

        <h3>5. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party sites. We are not responsible for their privacy practices.
        </p>

        <h3>6. Your Rights</h3>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access your personal information</li>
          <li>Request corrections or deletion</li>
          <li>Opt-out of communications</li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>Terms of Use</h2>
        
        <h3>1. Acceptable Use</h3>
        <p>
          You agree not to:
        </p>
        <ul>
          <li>Use this website for illegal purposes</li>
          <li>Transmit malware or harmful code</li>
          <li>Harass or abuse other users</li>
          <li>Violate intellectual property rights</li>
        </ul>

        <h3>2. Disclaimer of Warranties</h3>
        <p>
          This website is provided "as is" without warranties of any kind. We do not guarantee:
        </p>
        <ul>
          <li>Uninterrupted service availability</li>
          <li>Accuracy of all information</li>
          <li>Freedom from errors or defects</li>
        </ul>

        <h3>3. Limitation of Liability</h3>
        <p>
          We shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
        </p>

        <h3>4. User Content</h3>
        <p>
          Any content you submit becomes the property of our website and may be used for any purpose.
        </p>

        <h3>5. Changes to Terms</h3>
        <p>
          We reserve the right to modify these terms at any time. Continued use constitutes acceptance of changes.
        </p>
      </section>

      <section class="policy-section">
        <h2>Insurance Disclaimers & Compliance</h2>
        
        <h3>⚠️ Important Disclaimer</h3>
        <p style="background: #fff3cd; padding: 1rem; border-radius: 5px; border-left: 4px solid #ffc107;">
          <strong>Insurance is a subject matter of solicitation.</strong>
        </p>

        <h3>Agent Registration</h3>
        <p>
          <strong>Agent Name:</strong> Sunil Dutt<br>
          <strong>IRDAI License Number:</strong> [Your IRDAI Registration Number]<br>
          <strong>LIC Agent Code:</strong> [Your Agent Code]
        </p>

        <h3>Information Accuracy</h3>
        <p>
          All plan information on this website is based on official LIC documents and brochures. However:
        </p>
        <ul>
          <li>Details may change; always refer to the official policy document</li>
          <li>Benefits are subject to terms and conditions of the policy</li>
          <li>Premium rates may vary based on medical underwriting</li>
          <li>No guarantee of future bonuses (for participating plans)</li>
        </ul>

        <h3>Regulatory Compliance</h3>
        <p>
          This website and all communications comply with:
        </p>
        <ul>
          <li>IRDAI (Insurance Regulatory and Development Authority) guidelines</li>
          <li>LIC's marketing and communication policies</li>
          <li>Indian Information Technology Act, 2000</li>
        </ul>

        <h3>Claim Settlement</h3>
        <p>
          Claim settlement is subject to:
        </p>
        <ul>
          <li>Policy terms and conditions</li>
          <li>LIC's claim investigation process</li>
          <li>Submission of complete documentation</li>
        </ul>

        <h3>Linking to LIC Official Resources</h3>
        <p>
          For official information, visit:
        </p>
        <ul>
          <li><a href="https://licindia.in" target="_blank">LIC Official Website (licindia.in)</a></li>
          <li><a href="#">IRDAI Official Portal</a></li>
        </ul>
      </section>

      <section class="policy-section">
        <h2>Contact Us for Clarifications</h2>
        <p>
          If you have questions about this policy, insurance products, or any terms:
        </p>
        <div class="contact-box">
          <p><strong>Phone:</strong> {{ agentPhone }}</p>
          <p><strong>Email:</strong> <a :href="`mailto:${agentEmail}`">{{ agentEmail }}</a></p>
          <p><strong>WhatsApp:</strong> <a :href="whatsappLink" target="_blank">Chat with us</a></p>
        </div>
      </section>

      <section class="policy-section">
        <h2>Last Updated</h2>
        <p>This privacy policy and terms were last updated on April 23, 2026.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agentPhone: import.meta.env.VITE_AGENT_PHONE,
      agentEmail: import.meta.env.VITE_AGENT_EMAIL
    }
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${import.meta.env.VITE_AGENT_WHATSAPP}?text=Hi`
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #001f3f;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

h2 {
  color: #001f3f;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 3px solid #FF6B35;
  padding-bottom: 0.5rem;
}

h3 {
  color: #001f3f;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.policy-section {
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
}

ul {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

ul li {
  color: #555;
  margin-bottom: 0.5rem;
}

a {
  color: #0074D9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.contact-box {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #FF6B35;
  margin-top: 1rem;
}

.contact-box p {
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .policy-section {
    padding: 1.5rem;
  }
}
</style>
