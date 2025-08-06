# Portfolio de Ángel Moncada

## 🚀 Descripción

Portfolio personal desarrollado con React, TypeScript, Vite y TailwindCSS. Presenta mis proyectos, habilidades y experiencia como desarrollador Full-Stack.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Responsive**: Optimizado para todos los dispositivos
- **Performance**: Construido con Vite para carga rápida
- **TypeScript**: Tipado estático para mejor mantenibilidad
- **Componentes UI**: Shadcn/ui y Radix UI para componentes accesibles
- **Animaciones**: Framer Motion para transiciones fluidas
- **Formulario de Contacto**: Integración con EmailJS

## 🛠️ Tecnologías

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Shadcn/ui, Radix UI
- **Animaciones**: Framer Motion
- **Formularios**: EmailJS
- **Iconos**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd Portfolio-main
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:8080](http://localhost:8080) en tu navegador

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes UI reutilizables
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sección sobre mí
│   ├── Projects.tsx    # Sección de proyectos
│   ├── Contact.tsx     # Formulario de contacto
│   └── ...
├── hooks/              # Custom hooks
├── lib/                # Utilidades y configuraciones
├── pages/              # Páginas de la aplicación
├── types/              # Definiciones de tipos TypeScript
└── main.tsx           # Punto de entrada
```

## 🚀 Deployment

### GitHub Pages

1. Construye la aplicación:
```bash
npm run build
```

2. Los archivos de producción estarán en la carpeta `dist/`

3. Configura GitHub Pages para usar la carpeta `dist/` o sube los archivos a tu hosting preferido

### Otras Plataformas

- **Vercel**: Conecta tu repositorio y despliega automáticamente
- **Netlify**: Arrastra la carpeta `dist/` o conecta tu repositorio
- **Firebase Hosting**: Usa `firebase deploy` después del build

## 📧 Sistema de Contacto

Este portafolio utiliza un **sistema de contacto nativo** que no requiere configuración de APIs:

### ✨ Características
- **📨 Envío por Email:** Abre el cliente de correo con mensaje prellenado
- **📇 Descarga vCard:** Genera archivo de contacto (.vcf)
- **📋 Copia al Portapapeles:** Copia información de contacto

### 🚀 Ventajas
- ✅ **Cero configuración** - Funciona inmediatamente
- ✅ **Sin APIs externas** - No depende de servicios terceros
- ✅ **Completamente gratis** - Sin límites ni costos
- ✅ **Privacidad total** - No se envían datos a terceros
- ✅ **Funciona offline** - Usa tecnologías web nativas

Para más detalles, consulta [CONTACT_SYSTEM.md](./CONTACT_SYSTEM.md)

## 🐛 Correcciones Realizadas

- ✅ Corregida importación de `next-themes` por hook personalizado
- ✅ Eliminada importación circular en `use-toast.ts`
- ✅ Creado archivo `blog-data.ts` faltante con interfaz completa
- ✅ Actualizada configuración de ESLint para compatibilidad
- ✅ Verificado que todas las dependencias estén correctamente instaladas
- ✅ Build de producción funcionando sin errores
- ✅ Servidor de desarrollo estable con HMR

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Ángel Moncada**
- Email: angelfmoncada.m@gmail.com
- GitHub: [Tu GitHub]
- LinkedIn: [Tu LinkedIn]

---

¡Gracias por visitar mi portfolio! 🚀
