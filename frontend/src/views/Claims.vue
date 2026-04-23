<template>
  <div class="claims">
    <div class="container">
      <h1>Claims & Service</h1>
      <p class="intro">Complete support for your policy servicing and claim settlement</p>

      <div class="content-grid">
        <section class="claim-process">
          <h2>Claim Settlement Process</h2>
          
          <div class="process-steps">
            <div class="step">
              <div class="step-number">1</div>
              <h3>Notification</h3>
              <p>Notify the LIC office or your agent about the claim (death or maturity) immediately</p>
            </div>

            <div class="step">
              <div class="step-number">2</div>
              <h3>Documentation</h3>
              <p>Submit required documents: Claim Form A, death certificate (for death claims), and original policy</p>
            </div>

            <div class="step">
              <div class="step-number">3</div>
              <h3>Verification</h3>
              <p>LIC verifies documents and processes the claim (typically 10-15 days)</p>
            </div>

            <div class="step">
              <div class="step-number">4</div>
              <h3>Settlement</h3>
              <p>Claim amount is paid to the nominee/policyholder as per LIC policy terms</p>
            </div>
          </div>
        </section>

        <section class="required-documents">
          <h2>Required Documents</h2>
          
          <div class="doc-category">
            <h3>For Death Claims (after 3 years)</h3>
            <ul>
              <li>Original Policy document</li>
              <li>Claim Form A (duly completed)</li>
              <li>Death certificate (certified copy)</li>
              <li>Nominee's identity proof</li>
              <li>Bank account details for payment</li>
            </ul>
          </div>

          <div class="doc-category">
            <h3>For Maturity Claims</h3>
            <ul>
              <li>Original Policy document</li>
              <li>Discharge form (provided by LIC)</li>
              <li>Identity and address proof</li>
              <li>Bank account details</li>
            </ul>
          </div>

          <div class="doc-category">
            <h3>For Service Requests</h3>
            <ul>
              <li>Policy number</li>
              <li>Customer ID (if available)</li>
              <li>Specific query or request details</li>
            </ul>
          </div>
        </section>

        <section class="policy-servicing">
          <h2>Policy Servicing</h2>
          
          <div class="service-card">
            <h3>Premium Payment</h3>
            <p>You can pay premiums through multiple modes:</p>
            <ul>
              <li>Direct bank transfer</li>
              <li>Online banking (LIC website/portal)</li>
              <li>Cheque</li>
              <li>Standing instructions</li>
              <li>Agent collection</li>
            </ul>
          </div>

          <div class="service-card">
            <h3>Policy Status & Documents</h3>
            <p>Check your policy status and download documents:</p>
            <ul>
              <li>Visit LIC Customer Portal: <a href="https://example.com/lic-portal" target="_blank">LIC ePortal</a></li>
              <li>Use mobile app: Download LIC Mobile App</li>
              <li>Contact your agent for assistance</li>
            </ul>
          </div>

          <div class="service-card">
            <h3>Policy Rider & Modifications</h3>
            <p>You can add riders or modify your policy:</p>
            <ul>
              <li>Premium Waiver Rider</li>
              <li>Critical Illness Rider</li>
              <li>Accidental Death & Disability</li>
              <li>Contact your agent for details</li>
            </ul>
          </div>

          <div class="service-card">
            <h3>Policy Loan & Surrender</h3>
            <p>Flexible options available:</p>
            <ul>
              <li>Loan against policy (up to loan value)</li>
              <li>Surrender and claim surrender value</li>
              <li>Revival of lapsed policies (within 5 years)</li>
            </ul>
          </div>
        </section>

        <section class="support-channels">
          <h2>How to Reach Us</h2>
          
          <div class="contact-methods">
            <div class="method">
              <h3>📞 Phone</h3>
              <p>{{ agentPhone }}</p>
              <p style="font-size: 0.9rem; color: #999;">Monday-Saturday, 9 AM - 6 PM</p>
            </div>

            <div class="method">
              <h3>💬 WhatsApp</h3>
              <p><a :href="whatsappLink" target="_blank">Chat with us instantly</a></p>
              <p style="font-size: 0.9rem; color: #999;">Quick responses to your queries</p>
            </div>

            <div class="method">
              <h3>✉️ Email</h3>
              <p><a :href="`mailto:${agentEmail}`">{{ agentEmail }}</a></p>
              <p style="font-size: 0.9rem; color: #999;">We reply within 24 hours</p>
            </div>

            <div class="method">
              <h3>📍 Visit Office</h3>
              <p>{{ agentAddress }}</p>
              <p style="font-size: 0.9rem; color: #999;">Appointment recommended</p>
            </div>
          </div>
        </section>

        <section class="faq">
          <h2>Frequently Asked Questions</h2>
          
          <div class="faq-item">
            <h3>How long does claim settlement take?</h3>
            <p>Generally, claims are settled within 10-15 days of submission of complete documents. Death claims after 3 years follow normal process.</p>
          </div>

          <div class="faq-item">
            <h3>What if policy has lapsed?</h3>
            <p>You can revive your policy within 5 years by paying all due premiums with interest. Contact your agent for exact amount.</p>
          </div>

          <div class="faq-item">
            <h3>Can I take a loan against my policy?</h3>
            <p>Yes, after 3 complete premium payments, you can take a loan up to the loan value (usually 80% of surrender value).</p>
          </div>

          <div class="faq-item">
            <h3>How do I update my beneficiary?</h3>
            <p>Submit a written request with nominee change form along with your policy number to your nearest LIC office or through our agent.</p>
          </div>
        </section>
      </div>

      <section class="important-links">
        <h2>Important Links</h2>
        <div class="links-grid">
          <a href="https://licindia.in" target="_blank" class="link-card">
            <h3>LIC Official Website</h3>
            <p>Visit LIC India for official information</p>
          </a>
          <a href="#" target="_blank" class="link-card">
            <h3>IRDAI Policyholder Portal</h3>
            <p>Access IRDAI resources and information</p>
          </a>
          <a href="#" target="_blank" class="link-card">
            <h3>Policy Document</h3>
            <p>Download and review your policy details</p>
          </a>
          <a href="/contact" class="link-card">
            <h3>Contact Support</h3>
            <p>Get help from our support team</p>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agentPhone: import.meta.env.VITE_AGENT_PHONE || '+91 9416662922',
      agentEmail: import.meta.env.VITE_AGENT_EMAIL || 'dutt2785@gmail.com',
      agentAddress: import.meta.env.VITE_AGENT_ADDRESS || 'Jind, Haryana, India 126102'
    }
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${import.meta.env.VITE_AGENT_WHATSAPP || '919416662922'}?text=I%20need%20help%20with%20my%20policy`
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

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

h2 {
  color: #001f3f;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #FF6B35;
  padding-bottom: 0.5rem;
}

h3 {
  color: #001f3f;
  margin-bottom: 0.5rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.step {
  background: linear-gradient(135deg, #f0f0f0 0%, #f9f9f9 100%);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  border-top: 4px solid #0074D9;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #FF6B35;
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.step p {
  color: #666;
  line-height: 1.6;
}

.doc-category,
.service-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.doc-category h3,
.service-card h3 {
  color: #FF6B35;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.doc-category ul,
.service-card ul {
  list-style: none;
  padding-left: 0;
}

.doc-category li,
.service-card li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
}

.doc-category li::before,
.service-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #0074D9;
  font-weight: bold;
}

.service-card p {
  color: #666;
  margin-bottom: 1rem;
}

.service-card a {
  color: #0074D9;
  text-decoration: none;
}

.service-card a:hover {
  text-decoration: underline;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.method {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-left: 4px solid #FF6B35;
}

.method h3 {
  color: #001f3f;
  margin-bottom: 0.5rem;
}

.method p {
  color: #555;
  margin: 0.3rem 0;
}

.method a {
  color: #0074D9;
  text-decoration: none;
  font-weight: 600;
}

.method a:hover {
  text-decoration: underline;
}

.faq-item {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #0074D9;
}

.faq-item h3 {
  color: #001f3f;
  margin-bottom: 0.5rem;
}

.faq-item p {
  color: #666;
  line-height: 1.6;
}

.important-links {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.link-card {
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s;
  display: block;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.link-card h3 {
  color: white;
  margin-bottom: 0.5rem;
}

.link-card p {
  font-size: 0.9rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
