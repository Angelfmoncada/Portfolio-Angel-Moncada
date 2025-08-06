# 🚀 Deployment Guide - Netlify

## 📋 Pre-requisitos

- Cuenta en [Netlify](https://netlify.com)
- Cuenta en [GitHub](https://github.com) (recomendado)
- Node.js 18+ instalado localmente

## 🎯 Método 1: Deploy Automático desde GitHub (Recomendado)

### Paso 1: Subir a GitHub
```bash
# Inicializar repositorio Git
git init
git add .
git commit -m "Initial commit: Portfolio with contact system"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Netlify
1. Ve a [Netlify](https://app.netlify.com)
2. Click en "New site from Git"
3. Selecciona "GitHub" y autoriza la conexión
4. Elige tu repositorio del portfolio
5. Configura los settings de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### Paso 3: Deploy Automático
- Netlify detectará automáticamente el `netlify.toml`
- El deploy se ejecutará automáticamente
- Cada push a `main` activará un nuevo deploy

## 🎯 Método 2: Deploy Manual (Drag & Drop)

### Paso 1: Build Local
```bash
npm install
npm run build
```

### Paso 2: Deploy Manual
1. Ve a [Netlify](https://app.netlify.com)
2. Arrastra la carpeta `dist` al área de deploy
3. Netlify subirá automáticamente los archivos

## ⚙️ Configuración Incluida

### Archivos de Configuración
- ✅ `netlify.toml` - Configuración principal
- ✅ `public/_redirects` - Manejo de rutas SPA
- ✅ Headers de seguridad configurados
- ✅ Cache optimizado para assets

### Optimizaciones Aplicadas
- 🔒 **Seguridad**: Headers CSP, XSS Protection, Frame Options
- ⚡ **Performance**: Cache inmutable para assets estáticos
- 🌐 **SPA Support**: Redirects para React Router
- 📱 **PWA Ready**: Configuración para Progressive Web App

## 🔧 Variables de Entorno (Si las necesitas)

En Netlify Dashboard:
1. Ve a Site Settings → Environment Variables
2. Agrega las variables necesarias:
   ```
   VITE_API_URL=https://tu-api.com
   VITE_CONTACT_EMAIL=tu-email@gmail.com
   ```

## 📊 Monitoreo Post-Deploy

### Verificaciones Importantes
- ✅ Todas las rutas funcionan correctamente
- ✅ Formulario de contacto abre el cliente de email
- ✅ Descarga de vCard funciona
- ✅ Copia al portapapeles funciona
- ✅ Modo oscuro/claro funciona
- ✅ Responsive design en todos los dispositivos

### Performance Checks
- 🚀 [PageSpeed Insights](https://pagespeed.web.dev/)
- 🔍 [GTmetrix](https://gtmetrix.com/)
- 📱 [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 🌐 Custom Domain (Opcional)

1. En Netlify Dashboard → Domain Settings
2. Click "Add custom domain"
3. Sigue las instrucciones para configurar DNS
4. Netlify proveerá SSL automáticamente

## 🔄 CI/CD Pipeline

Con GitHub conectado, tienes:
- ✅ Deploy automático en cada push
- ✅ Preview deploys para Pull Requests
- ✅ Rollback fácil a versiones anteriores
- ✅ Build logs detallados

## 🆘 Troubleshooting

### Error: "Page Not Found" en rutas
- Verifica que `_redirects` esté en `public/`
- Confirma que `netlify.toml` tenga la configuración correcta

### Error: Build Failed
- Verifica la versión de Node.js (debe ser 18+)
- Revisa que todas las dependencias estén en `package.json`
- Checa los logs de build en Netlify Dashboard

### Error: Assets no cargan
- Verifica que `dist` sea el directorio de publish
- Confirma que el build local funcione: `npm run build`

## 📞 Soporte

Si tienes problemas:
1. Revisa los [Netlify Docs](https://docs.netlify.com/)
2. Checa el [Netlify Community](https://community.netlify.com/)
3. Verifica los logs en Netlify Dashboard

---

**¡Tu portfolio está listo para el mundo! 🌍✨**