# 🚀 Deployment Guide - Next.js Portfolio

## Quick Deploy to Vercel (Recommended - 2 Minutes)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/your-portfolio.git

# Push
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"
6. Done! Your site is live in ~2 minutes

**Your URL:** `https://your-portfolio.vercel.app`

---

## Environment Variables (If Needed)

If you add API integrations later:

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

Add these in Vercel Dashboard → Settings → Environment Variables

---

## Custom Domain Setup

### On Vercel:

1. Go to your project → Settings → Domains
2. Add your custom domain: `yourdomain.com`
3. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Done! SSL certificate auto-configured

---

## Deploy to Netlify

### Method 1: Drag & Drop

```bash
# Build your project
npm run build

# Drag the .next folder to Netlify Drop
```

### Method 2: Git Integration

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Connect GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

---

## Deploy to AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

---

## Deploy to DigitalOcean

### Using App Platform:

1. Push to GitHub
2. Go to DigitalOcean → Apps → Create App
3. Connect GitHub repo
4. Select Next.js
5. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
6. Deploy!

---

## Self-Hosted Deployment (VPS/Server)

### Using PM2:

```bash
# Install PM2
npm install -g pm2

# Build your app
npm run build

# Start with PM2
pm2 start npm --name "portfolio" -- start

# Save PM2 config
pm2 save

# Setup startup script
pm2 startup
```

### Using Docker:

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Performance Optimization Checklist

Before deploying:

- ✅ Run `npm run build` locally to check for errors
- ✅ Test on mobile devices
- ✅ Check all links work
- ✅ Verify contact form functionality
- ✅ Test in different browsers
- ✅ Check Lighthouse score (aim for 90+)
- ✅ Optimize images if added later
- ✅ Enable gzip compression (automatic on Vercel)

---

## Post-Deployment Checklist

- ✅ Verify site loads correctly
- ✅ Test all navigation links
- ✅ Check mobile responsiveness
- ✅ Test contact form
- ✅ Verify social media links
- ✅ Check SEO meta tags
- ✅ Test scroll animations
- ✅ Verify custom domain (if added)

---

## Analytics Setup (Optional)

### Google Analytics 4:

1. Get GA4 tracking ID
2. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Vercel Analytics:

```bash
npm install @vercel/analytics

# Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## Monitoring & Maintenance

### Check Performance:

- Vercel Analytics Dashboard
- Google Search Console
- Lighthouse CI
- WebPageTest.org

### Regular Updates:

```bash
# Update dependencies monthly
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

---

## Troubleshooting Deployment Issues

### Build Fails:

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### 404 Errors:

- Check file names match imports (case-sensitive)
- Verify all components have proper exports
- Check Next.js routing structure

### Slow Loading:

- Enable caching headers
- Use Next.js Image component for images
- Lazy load heavy components
- Use dynamic imports

---

## Backup Strategy

```bash
# Backup your code
git push origin main

# Export site (if needed)
npm run build
tar -czf portfolio-backup.tar.gz .next/ public/
```

---

## SSL Certificate

✅ Vercel: Automatic SSL (free)  
✅ Netlify: Automatic SSL (free)  
✅ Custom server: Use Let's Encrypt

---

## Cost Estimation

| Platform | Cost | Features |
|----------|------|----------|
| Vercel | Free | Perfect for portfolios, auto-SSL, CDN |
| Netlify | Free | Good for static sites, auto-SSL |
| AWS Amplify | ~$0-5/mo | Scalable, pay as you grow |
| DigitalOcean | $5/mo | Full control, more config needed |

**Recommendation:** Start with Vercel free tier. It's perfect for portfolios!

---

## Your Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] All links tested
- [ ] Mobile responsiveness verified
- [ ] Contact form working
- [ ] Analytics added (optional)
- [ ] Performance optimized (Lighthouse 90+)
- [ ] Shared on social media! 🎉

---

## Need Help?

- Vercel Discord: [discord.gg/vercel](https://discord.gg/vercel)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)

---

**Congratulations! Your portfolio is now live! 🚀**
