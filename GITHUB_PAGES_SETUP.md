# 🚀 GitHub Pages Deployment Setup

## Automatic Deployment Configuration

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### 📋 Prerequisites

1. **Repository Settings:**
   - Go to your repository: `https://github.com/Angelfmoncada/Portfolio-Angel-Moncada`
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `GitHub Actions`

### 🔧 Configuration Files

The following files are configured for GitHub Pages deployment:

#### `.github/workflows/deploy.yml`
- **Purpose:** GitHub Actions workflow for automatic deployment
- **Triggers:** Push to `master` branch
- **Process:** Build → Upload → Deploy to GitHub Pages

#### `vite.config.ts`
- **Base URL:** Configured for GitHub Pages subdirectory
- **Production Base:** `/Portfolio-Angel-Moncada/`
- **Development Base:** `/` (localhost)

### 🚀 Deployment Process

1. **Automatic Deployment:**
   ```bash
   git add .
   git commit -m "feat: your changes"
   git push origin master
   ```

2. **GitHub Actions will:**
   - Install dependencies (`npm ci`)
   - Build the project (`npm run build`)
   - Deploy to GitHub Pages

3. **Live URL:**
   ```
   https://angelfmoncada.github.io/Portfolio-Angel-Moncada/
   ```

### 📦 Build Configuration

- **Build Command:** `npm run build`
- **Output Directory:** `dist/`
- **Node Version:** 18.x
- **Package Manager:** npm

### 🔄 Workflow Status

Monitor deployment status:
- Go to `Actions` tab in your repository
- Check the "Deploy to GitHub Pages" workflow
- Green checkmark = successful deployment
- Red X = deployment failed (check logs)

### 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (test GitHub Pages build)
npm run build

# Preview production build
npm run preview
```

### 🔧 Troubleshooting

#### Common Issues:

1. **404 on GitHub Pages:**
   - Ensure `base` URL in `vite.config.ts` matches repository name
   - Check that GitHub Pages source is set to "GitHub Actions"

2. **Build Fails:**
   - Check Node.js version compatibility
   - Verify all dependencies are in `package.json`
   - Review GitHub Actions logs

3. **Assets Not Loading:**
   - Verify base URL configuration
   - Check relative paths in components

### 🌟 Features Included

✅ **Automatic Deployment**
- Push to master triggers deployment
- Zero-configuration setup
- Build status notifications

✅ **Performance Optimized**
- Vite build optimization
- Asset compression
- Tree shaking

✅ **SEO Ready**
- Meta tags optimization
- Proper routing for SPA
- Sitemap generation

✅ **Modern Contact System**
- Native email integration
- vCard download functionality
- Clipboard operations

---

**Repository:** https://github.com/Angelfmoncada/Portfolio-Angel-Moncada.git  
**Live Site:** https://angelfmoncada.github.io/Portfolio-Angel-Moncada/  
**Tech Stack:** React + TypeScript + Vite + TailwindCSS + GitHub Pages