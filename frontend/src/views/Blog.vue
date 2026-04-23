<template>
  <div class="blog">
    <div class="container">
      <h1>Blog & Resources</h1>
      <p class="intro">Articles, tips, and resources about insurance and financial planning</p>

      <div class="blog-grid">
        <article v-for="post in posts" :key="post.id" class="blog-card">
          <div class="card-image">{{ post.icon }}</div>
          <h2>{{ post.title }}</h2>
          <p class="meta">{{ post.date }} • {{ post.author }}</p>
          <p class="excerpt">{{ post.excerpt }}</p>
          <div class="card-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <a href="#" class="read-more">Read More →</a>
        </article>
      </div>

      <section class="resources">
        <h2>Download Resources</h2>
        <div class="resources-grid">
          <a href="#" class="resource-card">
            <h3>📄 LIC Jeevan Umang Brochure</h3>
            <p>Complete details about this whole life plan</p>
          </a>
          <a href="#" class="resource-card">
            <h3>📊 Insurance Comparison Guide</h3>
            <p>Compare different insurance plans at a glance</p>
          </a>
          <a href="#" class="resource-card">
            <h3>💼 Tax Benefits Guide 2026</h3>
            <p>Maximize your deductions under Section 80C</p>
          </a>
          <a href="#" class="resource-card">
            <h3>🏠 Family Planning Checklist</h3>
            <p>Essential insurance for your family</p>
          </a>
        </div>
      </section>

      <section class="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest insurance tips and updates directly to your inbox</p>
        <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <p v-if="newsletterMessage" class="newsletter-message">{{ newsletterMessage }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      newsletterMessage: '',
      posts: [
        {
          id: 1,
          title: 'Why Everyone Needs Term Insurance',
          excerpt: 'Understand the importance of term insurance for your family\'s financial security. Learn how affordable term plans can provide maximum protection.',
          icon: '🛡️',
          date: 'April 15, 2026',
          author: 'Sunil Dutt',
          tags: ['Insurance', 'Protection', 'Financial Planning']
        },
        {
          id: 2,
          title: 'LIC Tax Benefits: Maximize Your Deductions',
          excerpt: 'Discover how life insurance premiums under Section 80C can help you save on taxes. Learn limits and eligibility criteria.',
          icon: '💰',
          date: 'April 10, 2026',
          author: 'Sunil Dutt',
          tags: ['Tax Benefits', 'Savings', 'LIC']
        },
        {
          id: 3,
          title: 'How to Choose the Right Sum Assured?',
          excerpt: 'A comprehensive guide to calculating adequate life insurance coverage based on your family\'s needs and financial goals.',
          icon: '🧮',
          date: 'April 5, 2026',
          author: 'Sunil Dutt',
          tags: ['Planning', 'Insurance', 'Guidance']
        },
        {
          id: 4,
          title: 'Understanding Riders in Insurance Plans',
          excerpt: 'Learn about different riders available with LIC plans. Enhance your coverage with critical illness, disability, and other riders.',
          icon: '📋',
          date: 'March 30, 2026',
          author: 'Sunil Dutt',
          tags: ['Riders', 'Coverage', 'Protection']
        },
        {
          id: 5,
          title: 'Whole Life vs Term Insurance: Which is Right for You?',
          excerpt: 'Comparing different insurance types to help you make an informed decision based on your lifestyle and financial goals.',
          icon: '⚖️',
          date: 'March 25, 2026',
          author: 'Sunil Dutt',
          tags: ['Comparison', 'Planning', 'Insurance Types']
        },
        {
          id: 6,
          title: 'Common Myths About Life Insurance Debunked',
          excerpt: 'Clearing misconceptions about life insurance. Learn the truths about premiums, benefits, and claim settlements.',
          icon: '💡',
          date: 'March 20, 2026',
          author: 'Sunil Dutt',
          tags: ['Education', 'Myths', 'Facts']
        }
      ]
    }
  },
  methods: {
    subscribeNewsletter() {
      this.newsletterMessage = '✓ Thank you for subscribing! Check your email for confirmation.'
      this.email = ''
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

h2 {
  color: #001f3f;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.blog-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.card-image {
  font-size: 3rem;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f0f0 0%, #f9f9f9 100%);
}

.blog-card h2 {
  text-align: left;
  font-size: 1.3rem;
  margin: 1rem;
  margin-bottom: 0.5rem;
}

.meta {
  font-size: 0.85rem;
  color: #999;
  margin: 0 1rem 1rem;
}

.excerpt {
  color: #666;
  margin: 0 1rem;
  flex: 1;
  line-height: 1.6;
}

.card-tags {
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-block;
  background: #f0f0f0;
  color: #666;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.read-more {
  display: inline-block;
  margin: 0 1rem 1rem;
  color: #0074D9;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.read-more:hover {
  color: #FF6B35;
}

.resources {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.resource-card {
  background: linear-gradient(135deg, #001f3f 0%, #0074D9 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s;
}

.resource-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.resource-card h3 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.resource-card p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.newsletter {
  background: linear-gradient(135deg, #FF6B35 0%, #ffb366 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.newsletter h2 {
  color: white;
}

.newsletter p {
  color: white;
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form input {
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
}

.newsletter-form input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  background: white;
  color: #FF6B35;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
}

.newsletter-message {
  font-size: 0.95rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .newsletter-form {
    flex-direction: column;
  }
}
</style>
