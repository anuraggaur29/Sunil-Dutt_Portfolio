# Netlify Deployment Guide

## Overview

This project is configured for seamless deployment on Netlify. The `netlify.toml` file contains all necessary build and deployment configurations.

## Prerequisites

- GitHub account with this repository connected
- Netlify account (free tier available)
- Backend API deployed on external platform (Heroku, Railway, Render, etc.)

## Step-by-Step Deployment

### 1. Connect GitHub to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Choose **GitHub** as your git provider
4. Authorize Netlify to access your GitHub account
5. Select the `Sunil-Dutt_Portfolio` repository
6. Click **"Deploy site"**

### 2. Automatic Configuration

Netlify will automatically detect and use `netlify.toml` with:
- **Build command**: `cd frontend && npm install && npm run build`
- **Publish directory**: `frontend/dist`
- **Base directory**: `frontend`

### 3. Configure Environment Variables

In Netlify dashboard:

1. Go to **Site settings** → **Build & Deploy** → **Environment**
2. Click **Edit variables** or **Import from file**
3. Add the following variables:

```
VITE_API_BASE_URL = https://your-backend-api.herokuapp.com/api
VITE_AGENT_NAME = Sunil Dutt
VITE_AGENT_PHONE = +91 9416662922
VITE_AGENT_EMAIL = dutt2785@gmail.com
VITE_AGENT_WHATSAPP = 919416662922
VITE_AGENT_ADDRESS = Jind, Haryana, India 126102
VITE_APP_NAME = Sunil Dutt - LIC Agent
VITE_APP_URL = https://your-domain.netlify.app
```

> **Important**: Replace `https://your-backend-api.herokuapp.com/api` with your actual backend URL

### 4. Deploy

Push to GitHub's main branch:
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

Netlify automatically starts the build process.

### 5. Monitor Build

- Go to **Builds** in Netlify dashboard
- Watch the deployment progress
- Logs show build steps and any errors

### 6. Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `sunildutt.com`)
4. Follow DNS setup instructions
5. Update `VITE_APP_URL` with your custom domain

## Backend Deployment

Since Netlify hosts the frontend, deploy the backend separately:

### Option 1: Heroku

```bash
# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set \
  CORS_ORIGIN=https://your-netlify-domain.app \
  JWT_SECRET=your-super-secret-key

# Deploy
git push heroku main
```

### Option 2: Railway

1. Visit [railway.app](https://railway.app)
2. Click **Create new project**
3. Select **Deploy from GitHub**
4. Connect your repository
5. Set root directory to `backend`
6. Add environment variables
7. Deploy

### Option 3: Render

1. Visit [render.com](https://render.com)
2. Click **New Web Service**
3. Connect GitHub repository
4. Set **Root Directory** to `backend`
5. Set **Build Command** to `npm install`
6. Set **Start Command** to `node src/server.js`
7. Add environment variables
8. Deploy

## Configuration Files

### netlify.toml
Main configuration file that includes:
- Build settings
- Publish directory
- Redirect rules for SPA routing
- Environment variables for different contexts
- Security headers
- Cache control policies

### .netlifyignore
Specifies files to ignore during build:
- Backend directory (not needed for frontend)
- Node modules
- Git files
- Environment files

## Build Process

When you push to GitHub:

1. Netlify detects the push
2. Clones your repository
3. Installs frontend dependencies: `npm install`
4. Builds the Vue.js app: `npm run build`
5. Deploys `frontend/dist` folder
6. Generates a live URL
7. Shows deployment status

Build logs are available in the **Builds** tab.

## Important Configuration Details

### SPA Routing
The `netlify.toml` includes a redirect rule:
```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

This ensures all routes are handled by Vue Router, not Netlify.

### Cache Control
```toml
# index.html - Always fresh
Cache-Control = "public, max-age=0, must-revalidate"

# Static assets - Cache for 1 year
Cache-Control = "public, max-age=31536000, immutable"
```

### Security Headers
Includes:
- X-Frame-Options (clickjacking protection)
- X-Content-Type-Options (MIME type sniffing protection)
- X-XSS-Protection (XSS protection)
- Referrer-Policy (referrer control)
- Permissions-Policy (feature access control)

## Environment Contexts

### Production
Main branch deployment with production environment variables.

### Deploy Preview
Preview deployments for pull requests with staging environment variables.

### Branch Deploys
Optional: Deploy other branches to unique URLs.

## Troubleshooting

### Build Fails
1. Check build logs in Netlify dashboard
2. Verify `netlify.toml` syntax
3. Ensure `frontend` directory has `package.json`
4. Check that `vite build` works locally

### 404 Errors on Navigation
- Ensure `netlify.toml` has the SPA redirect rule
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)

### API Calls Fail
- Verify backend is running and accessible
- Check `VITE_API_BASE_URL` environment variable
- Check CORS settings on backend
- Verify `CORS_ORIGIN` includes your Netlify domain

### Environment Variables Not Working
- Ensure variables are set in Netlify dashboard (not local .env)
- Variable names must start with `VITE_` for frontend
- Trigger a new deploy after changing variables
- Hard refresh browser to clear cache

## Performance Optimization

### Lighthouse Score Improvements
- ✅ Static hosting on CDN (Netlify provides)
- ✅ Automatic minification and compression
- ✅ Image optimization (use next-gen formats)
- ✅ Caching strategy configured

### Further Improvements
- Add image optimization plugin
- Lazy load components
- Use Service Workers for offline support
- Implement analytics

## Monitoring & Analytics

In Netlify dashboard:
- **Deploys**: View deployment history
- **Functions**: Monitor serverless functions (if used)
- **Analytics**: View site analytics (available with paid plans)
- **Security**: Check security headers and SSL

## Advanced Features

### Form Handling
```javascript
// Netlify forms require this in form submissions
method="POST"
netlify
```

Currently forms POST directly to backend API.

### Serverless Functions
Could be added in `netlify/functions/` for backend.

### Continuous Deployment
Currently enabled - any push to main auto-deploys.

## Rollback

If a deployment breaks:
1. Go to **Deploys** in Netlify
2. Find the previous working deployment
3. Click **...** → **Publish deploy**
4. The previous version goes live

## Conclusion

Your site is now ready for production deployment on Netlify! 🚀

For questions or issues, check:
- [Netlify Docs](https://docs.netlify.com)
- [Vue.js Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Netlify Support Chat (available on dashboard)
