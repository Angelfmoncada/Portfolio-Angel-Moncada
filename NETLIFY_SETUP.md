# 🚀 Netlify Deployment Setup

## Quick Deploy to Netlify

### Option 1: Automatic Deployment (Recommended)

1. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose "GitHub" and authorize Netlify
   - Select this repository: `Angelfmoncada/Portfolio-Angel-Moncada`

2. **Build Settings:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your portfolio
   - Every push to `master` branch will trigger a new deployment

### Option 2: Manual Deployment

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder to Netlify

## 🔧 Configuration Files

The project includes pre-configured files for optimal Netlify deployment:

- **`netlify.toml`** - Build settings and redirects
- **`public/_redirects`** - SPA routing support
- **`DEPLOYMENT.md`** - Comprehensive deployment guide

## 🌟 Features Included

✅ **Performance Optimizations**
- Vite build optimization
- Asset compression
- Tree shaking

✅ **Security Headers**
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options

✅ **SEO & PWA Ready**
- Meta tags optimization
- Manifest file
- Favicon set

✅ **Modern Contact System**
- Native email integration
- vCard download
- Clipboard functionality

## 📱 Live Preview

Once deployed, your portfolio will be available at:
`https://your-site-name.netlify.app`

## 🔄 Continuous Deployment

With the GitHub integration:
- Push changes to `master` branch
- Netlify automatically builds and deploys
- Zero downtime deployments
- Rollback capability

---

**Repository:** https://github.com/Angelfmoncada/Portfolio-Angel-Moncada.git
**Tech Stack:** React + TypeScript + Vite + TailwindCSS