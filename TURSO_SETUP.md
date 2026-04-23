# Deploy Backend on Render.com with Turso Database

## Prerequisites
- Render.com account (free tier available)
- Turso account with database created
- GitHub repository connected

## Step-by-Step Deployment

### 1. Get Your Turso Credentials

From Turso Dashboard:
1. Click your database "sunil-dutt-lic"
2. Click **Connect**
3. Copy the connection URL (looks like): 
   ```
   libsql://sunil-dutt-lic-anuraggaur29.aws-ap-south-1.turso.io
   ```
4. Click **Create Token** → Copy the token
5. Save both for next steps

### 2. Create Render Web Service

1. Go to https://render.com
2. Click **Dashboard** → **New +** → **Web Service**
3. Choose **Deploy existing repository**
4. Search and select: **Sunil-Dutt_Portfolio**

### 3. Configure Build Settings

Fill in these exact values:

**Basic Settings:**
- **Name**: `sunil-dutt-lic-backend`
- **Environment**: Node
- **Region**: Choose closest to India (Singapore is good)
- **Branch**: `main`

**Build & Start Commands:**
- **Build Command**: `cd backend && npm install`
- **Start Command**: `cd backend && node src/server.js`

**Repository Access:**
- Keep as is (Render will auto-detect)

### 4. Add Environment Variables

**Very Important!** Copy these EXACTLY:

```
TURSO_CONNECTION_URL=libsql://sunil-dutt-lic-anuraggaur29.aws-ap-south-1.turso.io
TURSO_AUTH_TOKEN=your-token-from-step-1

PORT=5000
NODE_ENV=production

AGENT_NAME=Sunil Dutt
AGENT_PHONE=+91 9416662922
AGENT_EMAIL=dutt2785@gmail.com
AGENT_WHATSAPP=919416662922
AGENT_ADDRESS=Jind, Haryana, India 126102

JWT_SECRET=your-super-secret-random-key-123456-change-this-value
CORS_ORIGIN=https://sunildutt.netlify.app
```

> Replace:
> - `libsql://sunil-dutt-lic-anuraggaur29.aws-ap-south-1.turso.io` with YOUR Turso URL
> - `your-token-from-step-1` with YOUR Turso auth token
> - `https://sunildutt.netlify.app` with YOUR Netlify domain
> - `JWT_SECRET` with a random string (use: https://www.random.org/strings/)

### 5. Deploy

1. Click **Create Web Service**
2. Render starts building (shows logs)
3. Wait for **"Live"** status (2-5 minutes)
4. You'll get a URL like: `https://sunil-dutt-lic-backend.onrender.com`

### 6. Update Netlify Frontend

1. Go to Netlify Dashboard
2. Go to **Site settings** → **Build & Deploy** → **Environment**
3. Update `VITE_API_BASE_URL`:
   ```
   https://sunil-dutt-lic-backend.onrender.com/api
   ```
4. Click **Save** → **Trigger deploy**

---

## Testing Connection

### Test Backend Health
Open in browser:
```
https://sunil-dutt-lic-backend.onrender.com/api/health
```

Should return:
```json
{"status":"ok","message":"API is running"}
```

### Test From Frontend
1. Go to your Netlify site: `https://sunildutt.netlify.app`
2. Click **Contact** form
3. Fill and submit
4. Should see: **"✓ Message sent successfully!"**

### Test Database
Submit a contact form, then check in Turso Dashboard:
1. Go to Turso Console
2. Click **Edit Data**
3. Click **leads** table
4. You should see your test submission!

---

## API Endpoints (All Working)

All these endpoints now connect to Turso:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/health` | Check if API is running |
| POST | `/api/leads` | Submit contact form |
| GET | `/api/leads` | Get all leads (admin) |
| GET | `/api/plans` | List insurance plans |
| POST | `/api/calculator/estimate` | Calculate premium |
| POST | `/api/auth/login` | Agent login |

---

## Important Notes

### Cold Start
- Free Render tier: First request takes 15-30 seconds
- Upgrade to paid plan to remove this
- Cost: $7/month for permanent "on" state

### Database
- **Turso advantages**:
  - ✅ Cloud database (data persists)
  - ✅ No cold start limitations
  - ✅ Automatic backups
  - ✅ Easy scaling
  - ✅ Free tier: 1GB storage, unlimited reads

### Monitoring
- **Render**: View logs in dashboard
- **Turso**: View analytics and rows read/written

### Security
- Store `TURSO_AUTH_TOKEN` in environment variables (never in code)
- Use strong `JWT_SECRET`
- Enable HTTPS (Render auto-enables)

---

## Troubleshooting

**"Cannot connect to database"**
- Check Turso credentials in environment variables
- Verify token is valid
- Check Turso dashboard status

**"400 Bad Request"**
- Check CORS_ORIGIN matches your frontend URL
- Verify Content-Type headers are sent

**"Database tables not found"**
- Tables auto-create on first run
- Check Render logs for errors
- May need to trigger a deploy

---

## Next Steps

1. ✅ Create Turso database (done)
2. ⏳ Deploy backend on Render
3. ✅ Connect Turso to backend
4. ✅ Update Netlify frontend environment
5. ✅ Test complete flow
6. 🎉 Website is live and fully functional!

---

## Useful Links

- Turso Dashboard: https://app.turso.io
- Render Dashboard: https://dashboard.render.com
- Netlify Dashboard: https://app.netlify.com
- Your Turso DB: https://app.turso.io/databases/sunil-dutt-lic
