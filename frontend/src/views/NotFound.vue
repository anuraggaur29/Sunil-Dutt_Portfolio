<template>
  <div class="not-found">
    <div class="container">
      <div class="error-content">
        <div class="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Sorry! The page you're looking for doesn't exist.</p>
        
        <div class="actions">
          <RouterLink to="/" class="btn btn-primary">Go to Home</RouterLink>
          <RouterLink to="/contact" class="btn btn-secondary">Contact Us</RouterLink>
        </div>

        <div class="suggestions">
          <h3>Quick Links</h3>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/plans">Insurance Plans</RouterLink></li>
            <li><RouterLink to="/calculator">Premium Calculator</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          </ul>
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
  }
}
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.error-content {
  text-align: center;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  color: #FF6B35;
  line-height: 1;
  margin-bottom: 1rem;
}

h1 {
  color: #001f3f;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary {
  background: #0074D9;
  color: white;
}

.btn-primary:hover {
  background: #0052a3;
}

.btn-secondary {
  background: #FF6B35;
  color: white;
}

.btn-secondary:hover {
  background: #e55a28;
}

.suggestions {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 400px;
  margin: 0 auto;
}

.suggestions h3 {
  color: #001f3f;
  margin-bottom: 1rem;
}

.suggestions ul {
  list-style: none;
  padding: 0;
}

.suggestions li {
  margin-bottom: 0.8rem;
}

.suggestions a {
  color: #0074D9;
  text-decoration: none;
  font-weight: 500;
}

.suggestions a:hover {
  text-decoration: underline;
}
</style>
