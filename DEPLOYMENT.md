# Deployment Guide - Sunil Dutt LIC Agent Website

## Quick Start

This project contains both frontend (Vue.js) and backend (Node.js Express) components. Here's how to deploy each:

### Frontend Deployment (Netlify)

The frontend is configured for deployment on Netlify.

#### Steps:

1. **Connect GitHub to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Netlify will auto-detect the `netlify.toml` configuration

2. **Configure Environment Variables** (in Netlify UI)
   - Go to Site Settings → Build & Deploy → Environment
   - Add the following variables:
     ```
     VITE_API_BASE_URL=https://your-backend-url.com/api
     VITE_AGENT_NAME=Sunil Dutt
     VITE_AGENT_PHONE=+91 9416662922
     VITE_AGENT_EMAIL=dutt2785@gmail.com
     VITE_AGENT_WHATSAPP=919416662922
     VITE_AGENT_ADDRESS=Jind, Haryana, India 126102
     VITE_APP_NAME=Sunil Dutt - LIC Agent
     VITE_APP_URL=https://your-domain.netlify.app
     ```

3. **Deploy**
   - Push to GitHub
   - Netlify automatically builds and deploys from the `netlify.toml` config

#### Build Configuration:
- **Build Command**: `cd frontend && npm install && npm run build`
- **Publish Directory**: `frontend/dist`
- **Base Directory**: `frontend`

### Backend Deployment (Heroku / Railway / Vercel)

The backend API needs to be deployed separately. Options:

#### Option 1: Deploy on Heroku (Recommended for ease)

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create a new app
heroku create your-app-name

# Set environment variables
heroku config:set \
  PORT=5000 \
  NODE_ENV=production \
  DATABASE_PATH=./data/lic-agent.db \
  JWT_SECRET=your-secret-key \
  CORS_ORIGIN=https://your-domain.netlify.app

# Deploy
git push heroku main
```

#### Option 2: Deploy on Railway

1. Sign up at [railway.app](https://railway.app)
2. Connect GitHub repository
3. Select the `backend` directory as root
4. Configure environment variables in Railway dashboard
5. Deploy

#### Option 3: Deploy on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from backend directory
cd backend
vercel
```

### Connecting Frontend & Backend

After deploying both:

1. Get your backend URL from your hosting provider
2. Update `netlify.toml` with the backend URL:
   ```
   VITE_API_BASE_URL = "https://your-backend-url.com/api"
   ```
3. Redeploy the frontend

### Local Development

```bash
# Terminal 1: Backend
cd backend
npm install
npm run dev

# Terminal 2: Frontend
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:3000`
Backend runs on: `http://localhost:5000`

### Production URLs

Once deployed:
- **Frontend**: `https://your-domain.netlify.app`
- **Backend**: `https://your-backend-url.com`

### Security Checklist

- [ ] Set `JWT_SECRET` to a strong random string
- [ ] Enable HTTPS on all deployments
- [ ] Configure CORS origin correctly
- [ ] Set proper environment variables for production
- [ ] Enable database backups for SQLite
- [ ] Configure domain name and DNS
- [ ] Set up SSL certificate (automatic on Netlify)
- [ ] Enable rate limiting on API endpoints
- [ ] Keep dependencies updated

### Troubleshooting

**CORS Errors**
- Check `CORS_ORIGIN` environment variable matches frontend URL
- Verify backend API is running and accessible

**API Calls Failing**
- Verify `VITE_API_BASE_URL` in frontend .env matches backend URL
- Check backend logs for errors

**Database Issues**
- Ensure backend has write permissions to data directory
- For production, consider using PostgreSQL instead of SQLite

### Additional Notes

- Frontend is optimized for all device sizes (mobile, tablet, desktop)
- Backend uses SQLite for development; consider PostgreSQL for production
- All API endpoints are protected with CORS validation
- Forms are validated both client and server-side
