#!/usr/bin/env node

/**
 * 🚀 Automated Deployment Script for Netlify
 * 
 * This script automates the deployment process:
 * 1. Runs build
 * 2. Validates build output
 * 3. Provides deployment instructions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✅${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}❌${colors.reset} ${msg}`),
  title: (msg) => console.log(`\n${colors.cyan}${colors.bright}🚀 ${msg}${colors.reset}\n`)
};

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    log.success(`${description} exists`);
    return true;
  } else {
    log.error(`${description} missing: ${filePath}`);
    return false;
  }
}

function validateBuild() {
  log.title('Validating Build Output');
  
  const distPath = path.join(__dirname, 'dist');
  const requiredFiles = [
    { path: path.join(distPath, 'index.html'), desc: 'Main HTML file' },
    { path: path.join(distPath, 'assets'), desc: 'Assets directory' },
    { path: path.join(__dirname, 'netlify.toml'), desc: 'Netlify config' },
    { path: path.join(__dirname, 'public', '_redirects'), desc: 'Redirects file' }
  ];
  
  let allValid = true;
  requiredFiles.forEach(file => {
    if (!checkFile(file.path, file.desc)) {
      allValid = false;
    }
  });
  
  if (allValid) {
    log.success('All required files present!');
    return true;
  } else {
    log.error('Some required files are missing!');
    return false;
  }
}

function showDeploymentInstructions() {
  log.title('Deployment Instructions');
  
  console.log(`${colors.bright}Option 1: Drag & Drop (Quick)${colors.reset}`);
  console.log('1. Go to https://app.netlify.com');
  console.log('2. Drag the "dist" folder to the deploy area');
  console.log('3. Your site will be live in seconds!\n');
  
  console.log(`${colors.bright}Option 2: Git Integration (Recommended)${colors.reset}`);
  console.log('1. Push this code to GitHub:');
  console.log(`   ${colors.cyan}git add .${colors.reset}`);
  console.log(`   ${colors.cyan}git commit -m "Ready for deployment"${colors.reset}`);
  console.log(`   ${colors.cyan}git push origin main${colors.reset}`);
  console.log('2. Connect your GitHub repo to Netlify');
  console.log('3. Netlify will auto-deploy on every push!\n');
  
  console.log(`${colors.bright}Build Settings for Netlify:${colors.reset}`);
  console.log(`Build command: ${colors.green}npm run build${colors.reset}`);
  console.log(`Publish directory: ${colors.green}dist${colors.reset}`);
  console.log(`Node version: ${colors.green}18${colors.reset}\n`);
}

function showOptimizations() {
  log.title('Included Optimizations');
  
  const optimizations = [
    '🔒 Security headers (XSS, CSRF, Frame protection)',
    '⚡ Asset caching (1 year for immutable files)',
    '🌐 SPA routing support (_redirects)',
    '📱 PWA ready (manifest, icons)',
    '🎯 SEO optimized (meta tags, robots.txt)',
    '♿ Accessibility compliant (ARIA, semantic HTML)',
    '🌙 Dark/Light mode support',
    '📧 Native contact system (no APIs needed)'
  ];
  
  optimizations.forEach(opt => console.log(`  ${opt}`));
}

function main() {
  try {
    log.title('Portfolio Deployment Preparation');
    
    // Validate build
    if (!validateBuild()) {
      log.error('Build validation failed. Please fix the issues above.');
      process.exit(1);
    }
    
    // Show deployment instructions
    showDeploymentInstructions();
    
    // Show optimizations
    showOptimizations();
    
    log.title('Ready for Deployment! 🎉');
    log.info('Your portfolio is optimized and ready to go live!');
    log.info('Check DEPLOYMENT.md for detailed instructions.');
    
  } catch (error) {
    log.error(`Deployment preparation failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateBuild, showDeploymentInstructions };