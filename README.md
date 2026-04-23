# Sunil Dutt - LIC Insurance Agent Website

A comprehensive, modern website for LIC Insurance Agent Sunil Dutt serving Jind, Haryana.

## Project Structure

```
Sunil_Dutt-Website/
├── frontend/              # Vue.js 3 + Vite application
│   ├── src/
│   │   ├── views/        # Page components (Home, About, Plans, etc.)
│   │   ├── components/   # Reusable components
│   │   ├── App.vue       # Root component
│   │   ├── main.js       # Application entry point
│   │   └── style.css     # Global styles
│   ├── index.html        # HTML template
│   ├── package.json      # Frontend dependencies
│   ├── vite.config.js    # Vite configuration
│   └── .env.example      # Environment variables template
│
├── backend/               # Node.js + Express API
│   ├── src/
│   │   ├── routes/       # API endpoints (leads, plans, auth, calculator)
│   │   ├── models/       # Data models
│   │   ├── middleware/   # Express middleware
│   │   ├── controllers/  # Business logic
│   │   ├── server.js     # Express app entry
│   │   └── database.js   # SQLite database initialization
│   ├── package.json      # Backend dependencies
│   ├── .env.example      # Environment variables template
│   └── data/             # SQLite database file (auto-created)
│
└── deep-research-report.md  # Comprehensive planning document
```

## Tech Stack

- **Frontend**: Vue.js 3, Vue Router, Axios, Vite
- **Backend**: Node.js, Express, SQLite3
- **Database**: SQLite (development), upgradeable to PostgreSQL
- **Styling**: CSS3 with Flexbox/Grid
- **Authentication**: JWT tokens

## Features Implemented

### Frontend Pages
- ✅ Home (hero, value props, featured plans, testimonials)
- ✅ About (agent profile, credentials, services)
- ✅ Plans (LIC plan listing with filtering)
- ✅ Premium Calculator (interactive estimator)
- ✅ Claims & Service (process info, FAQ)
- ✅ Contact (contact form, maps, support channels)
- ✅ Blog (articles, resources, newsletter)
- ✅ Privacy & Terms (legal compliance)
- ✅ 404 Page (error handling)

### Backend APIs
- ✅ Leads Management (`/api/leads`)
- ✅ Plans Listing (`/api/plans`)
- ✅ Premium Calculator (`/api/calculator/estimate`)
- ✅ Authentication (`/api/auth` - register, login, user info)
- ✅ Health Check (`/api/health`)

### Database Tables
- `users` - Agent login accounts
- `leads` - Contact form submissions
- `plans` - LIC insurance plans
- `policies` - Client policy tracking
- `contact_inquiries` - General contact messages

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- Git

### Installation

1. **Clone/Download the project**
   ```bash
   cd x:\Sunil_Dutt-Website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

3. **Frontend Setup (in a new terminal)**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env if needed
   npm run dev
   ```

4. **Access the Website**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Docs: http://localhost:5000/api/health

## Configuration

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `DATABASE_PATH` - SQLite database location
- `JWT_SECRET` - Secret for JWT tokens
- `AGENT_*` - Agent details (name, phone, email, etc.)
- `CORS_ORIGIN` - Frontend URL for CORS

### Frontend (.env)
- `VITE_API_BASE_URL` - Backend API URL (http://localhost:5000/api)
- `VITE_AGENT_*` - Agent information for display
- `VITE_APP_*` - Application metadata

## Development Workflow

### Add New API Endpoint
1. Create route file in `backend/src/routes/`
2. Import in `server.js`
3. Use `getDatabase()` for data access

### Add New Page
1. Create component in `frontend/src/views/`
2. Add route in `frontend/src/main.js`
3. Link from navigation in `App.vue`

### Add Components
- Create in `frontend/src/components/`
- Import and use in pages

## Building for Production

### Frontend Build
```bash
cd frontend
npm run build
# Output: dist/ folder
```

### Backend Deployment
1. Install dependencies: `npm install --production`
2. Set `NODE_ENV=production`
3. Use process manager (PM2, Systemd, etc.)
4. Set up database backups

## API Endpoints Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/leads` | Create lead |
| GET | `/api/leads` | List all leads (admin) |
| GET | `/api/leads/:id` | Get single lead |
| PATCH | `/api/leads/:id` | Update lead status |
| GET | `/api/plans` | List all plans |
| GET | `/api/plans/:id` | Get plan details |
| POST | `/api/calculator/estimate` | Calculate premium |
| POST | `/api/auth/register` | Register agent |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/me` | Get current user |

## Content Management

### Update LIC Plans
1. Modify plan data in `frontend/src/views/Plans.vue` (temporary)
2. Or create admin panel to add plans via API
3. Data stored in SQLite `plans` table

### Update Agent Information
Edit `.env` files with agent details:
- Name, Phone, Email, WhatsApp
- Office Address, IRDAI License

## Security Considerations

- ✅ HTTPS ready
- ✅ JWT authentication
- ✅ CORS configured
- ✅ Password hashing (bcryptjs)
- ✅ Input validation
- 🔲 Rate limiting (TODO)
- 🔲 Penetration testing (TODO)

## Performance Optimization

- 🔲 Implement caching (Redis)
- 🔲 Image optimization
- 🔲 Lazy loading
- 🔲 CDN integration
- 🔲 Database indexing

### Current Lighthouse Targets
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

## Testing

### Manual Testing Checklist
- [ ] Form submissions work
- [ ] Calculator estimates display
- [ ] All pages load correctly
- [ ] Mobile responsive
- [ ] Links functional

### Automated Testing (TODO)
- Unit tests (Jest/Vitest)
- Integration tests
- E2E tests (Cypress/Playwright)

## Deployment Options

### Option 1: Heroku
```bash
# Backend deployment
heroku create your-app-name
git push heroku main
```

### Option 2: AWS
- EC2 for backend
- S3 + CloudFront for frontend
- RDS for PostgreSQL upgrade

### Option 3: DigitalOcean
- App Platform for both
- Managed Database

### Option 4: Netlify + Vercel
- Frontend on Netlify
- Backend serverless functions

## Next Steps

1. **Customize Agent Information**
   - Update `.env` files
   - Add agent photos/videos
   - Customize testimonials

2. **Add More Content**
   - Blog posts
   - Case studies
   - More LIC plan details

3. **Set Up Admin Panel**
   - Lead management dashboard
   - Plan management
   - Analytics

4. **Integrations**
   - WhatsApp Business API
   - Email service (SendGrid)
   - Payment gateway
   - Analytics (Google Analytics)

5. **Compliance**
   - IRDAI registration verification
   - Terms & Conditions review
   - Privacy Policy
   - Insurance disclaimers

6. **Testing & QA**
   - Performance testing
   - Security audit
   - Cross-browser testing
   - Mobile testing

## Support & Contact

For questions about this website:
- Email: {{ VITE_AGENT_EMAIL }}
- Phone: {{ VITE_AGENT_PHONE }}
- WhatsApp: {{ VITE_AGENT_WHATSAPP }}

## License

This project is for Sunil Dutt's LIC Insurance Agency. All content rights reserved.

## References

- [LIC Official Website](https://licindia.in)
- [IRDAI Portal](https://irdai.gov.in)
- [Vue.js Documentation](https://vuejs.org)
- [Express.js Guide](https://expressjs.com)

---

**Last Updated**: April 23, 2026  
**Version**: 1.0.0 (Initial Setup)
